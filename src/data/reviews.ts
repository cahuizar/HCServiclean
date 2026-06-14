// Typed loader for Google reviews. Components import from here — never the JSON
// directly. The JSON is a committed snapshot, regenerated at build time by
// scripts/fetch-reviews.mjs (see that file for the data flow).

import data from './reviews.json';

export interface Review {
  /** Reviewer display name, e.g. "Michelle W." */
  author: string;
  /** Star rating, 1–5. */
  rating: number;
  /** Review body text. */
  text: string;
  /** ISO date string (may be empty if the source omitted it). */
  date: string;
  /** Optional human-friendly age, e.g. "2 months ago". */
  relativeTime?: string;
}

export const reviews: Review[] = data.reviews;

export const reviewCount: number = data.reviewCount ?? reviews.length;

export const averageRating: number =
  data.averageRating ??
  Number((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1));

/** Curated highlights for home/about — highest rated, most recent first. */
export const featuredReviews: Review[] = [...reviews]
  .sort((a, b) => b.rating - a.rating || (b.date > a.date ? 1 : -1))
  .slice(0, 3);
