import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const SRC = "/Users/ravine/Downloads/Logo Nokturne/Logo pour fond même couleur vert (2).png";
const DST = "/Users/ravine/Documents/Yathra/Project/Nokturne-siteVitrine-avancé/public/images/logo-nokturne.png";

const buf = await readFile(SRC);
const trimmed = await sharp(buf)
  // Trim away transparent / near-transparent borders.
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 8 })
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(DST, trimmed);

const meta = await sharp(trimmed).metadata();
console.log(`OK ${meta.width}x${meta.height}, ${trimmed.length.toLocaleString()} bytes`);
