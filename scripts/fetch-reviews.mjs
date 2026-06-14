// Build-time fetch of Google reviews via Featurable's free JSON API.
//
// Featurable caches all of a Google Business Profile's reviews and exposes them
// at a public widget endpoint (no API key, no Google billing). We fetch them at
// build time and bake them into static HTML — keeping the site zero-JS.
//
// The widget ID is PUBLIC (not a secret), so it lives here as a constant and can
// be overridden via the FEATURABLE_WIDGET_ID env var.
//
// Fail-soft: on any error we keep the committed src/data/reviews.json snapshot and
// exit 0, so a flaky network or a Featurable outage never breaks a deploy.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '..', 'src', 'data', 'reviews.json');

// Featurable widget ID (public, not a secret). Override via FEATURABLE_WIDGET_ID if needed.
const WIDGET_ID = process.env.FEATURABLE_WIDGET_ID || '90b35846-3ce1-41e5-8b86-fc30f81da0b9';

const ENDPOINT = (id) => `https://featurable.com/api/v1/widgets/${id}`;

/** Pull a value from the first matching key in an object. */
function pick(obj, ...keys) {
  for (const k of keys) {
    if (obj && obj[k] != null) return obj[k];
  }
  return undefined;
}

/** Normalize one Featurable review to our committed shape. */
function normalize(r) {
  const reviewer = r.reviewer || r.author || {};
  const author =
    pick(r, 'authorName', 'author_name') ||
    pick(reviewer, 'displayName', 'name', 'author_name') ||
    'Google User';

  // starRating may be a number (5) or a Google enum string ("FIVE").
  const STAR_WORDS = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
  let ratingRaw = pick(r, 'starRating', 'rating', 'star_rating');
  let rating = typeof ratingRaw === 'string' ? STAR_WORDS[ratingRaw.toUpperCase()] : ratingRaw;
  rating = Number(rating) || 5;

  const text = pick(r, 'comment', 'text', 'reviewBody', 'review') || '';
  const date = pick(r, 'createTime', 'createdAt', 'date', 'time', 'updateTime') || '';
  const relativeTime = pick(r, 'relativeTimeDescription', 'relativeTime', 'relative_time_description');
  const avatarUrl =
    pick(reviewer, 'profilePhotoUrl', 'photoUrl', 'profile_photo_url', 'photo') ||
    pick(r, 'profilePhotoUrl', 'reviewerPhotoUrl', 'profile_photo_url');

  return {
    author: String(author).trim(),
    rating,
    text: String(text).trim(),
    date: date ? new Date(date).toISOString() : '',
    ...(relativeTime ? { relativeTime: String(relativeTime) } : {}),
    ...(avatarUrl ? { avatarUrl: String(avatarUrl) } : {}),
  };
}

async function main() {
  if (!WIDGET_ID) {
    console.warn(
      '[fetch-reviews] No FEATURABLE_WIDGET_ID set and no constant configured — ' +
        'keeping existing src/data/reviews.json snapshot.'
    );
    return;
  }

  try {
    const res = await fetch(ENDPOINT(WIDGET_ID), { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    const data = await res.json();
    const rawReviews = data.reviews || data.data?.reviews || [];
    if (!Array.isArray(rawReviews) || rawReviews.length === 0) {
      throw new Error('Response contained no reviews');
    }

    const reviews = rawReviews
      .map(normalize)
      .filter((r) => r.text.length > 0);

    const averageRating =
      Number(pick(data, 'averageRating', 'average_rating', 'rating')) ||
      Number((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1));

    const reviewCount =
      Number(pick(data, 'totalReviewCount', 'reviewCount', 'total_review_count')) ||
      reviews.length;

    const payload = {
      averageRating: Number(averageRating.toFixed(1)),
      reviewCount,
      reviews,
      fetchedAt: new Date().toISOString(),
    };

    await writeFile(OUT_FILE, JSON.stringify(payload, null, 2) + '\n', 'utf8');
    console.log(`[fetch-reviews] Wrote ${reviews.length} reviews (avg ${payload.averageRating}, count ${reviewCount}).`);
  } catch (err) {
    console.warn(
      `[fetch-reviews] Fetch failed (${err.message}) — keeping existing snapshot.`
    );
  }
}

main();
