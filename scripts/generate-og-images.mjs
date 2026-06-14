// Generates on-brand 1200x630 social-share (Open Graph) images with sharp.
//
// Produces:
//   public/images/og-default.jpg  — site-wide default card
//   public/images/og-review.jpg   — dedicated card for /leave-a-review
//
// Run manually with `npm run og:images` (e.g. after the logo changes).
// Text is kept evergreen on purpose — no live rating/review counts — because these
// JPGs are committed and served statically (not regenerated on every build).

import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const imagesDir = join(root, 'public', 'images');

// Embed the logo so librsvg can rasterize it inline.
const logoBuf = await readFile(join(imagesDir, 'logo-no-slogan.png'));
const logoMeta = await sharp(logoBuf).metadata();
const logo64 = logoBuf.toString('base64');
const LOGO_H = 116;
const LOGO_W = Math.round((LOGO_H * logoMeta.width) / logoMeta.height);

const FONT = "Arial, 'Helvetica Neue', 'DejaVu Sans', sans-serif";

function starRow(x, y, size, gap = 1.18) {
  let out = '';
  for (let i = 0; i < 5; i++) {
    const tx = x + i * size * gap;
    out += `<g transform="translate(${tx},${y}) scale(${size / 24})"><path fill="#ffca3c" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"/></g>`;
  }
  return out;
}

function card({ line1, line2, sub, ratingText }) {
  const starSize = 34;
  const starsX = 84;
  const starsY = 494;
  const ratingTextX = starsX + 5 * starSize * 1.18 + 18;
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff"/>
  <circle cx="1090" cy="80" r="170" fill="#ffca3c" opacity="0.10"/>
  <circle cx="110" cy="610" r="230" fill="#52b6bc" opacity="0.08"/>
  <circle cx="1010" cy="540" r="130" fill="none" stroke="#52b6bc" stroke-width="3" opacity="0.16"/>
  <circle cx="940" cy="120" r="60" fill="none" stroke="#ffca3c" stroke-width="3" opacity="0.18"/>
  <image href="data:image/png;base64,${logo64}" x="84" y="74" width="${LOGO_W}" height="${LOGO_H}"/>
  <text x="84" y="312" font-family="${FONT}" font-size="70" font-weight="700" fill="#0f172a">${line1}</text>
  <text x="84" y="392" font-family="${FONT}" font-size="70" font-weight="700" fill="#0f172a">${line2}</text>
  <text x="84" y="446" font-family="${FONT}" font-size="29" font-weight="500" fill="#64748b">${sub}</text>
  ${starRow(starsX, starsY, starSize)}
  <text x="${ratingTextX}" y="${starsY + 27}" font-family="${FONT}" font-size="28" font-weight="700" fill="#0f172a">${ratingText}</text>
</svg>`;
}

const cards = [
  {
    file: 'og-default.jpg',
    svg: card({
      line1: 'Spotless homes,',
      line2: 'happy families.',
      sub: 'Professional house cleaning across central Indiana',
      ratingText: `${rating} on Google · Family-owned since 2010`,
    }),
  },
  {
    file: 'og-review.jpg',
    svg: card({
      line1: 'Loved your clean?',
      line2: 'Leave us a review.',
      sub: 'Help our family-owned Indiana cleaning business grow.',
      ratingText: `${rating} on Google · ${count} reviews`,
    }),
  },
];

for (const { file, svg } of cards) {
  const out = await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
  await writeFile(join(imagesDir, file), out);
  console.log(`[og-images] Wrote ${file} (${out.length} bytes).`);
}
