// scripts/generate-sitemap.js
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 🔥 Esto SIEMPRE debe ir arriba para crear __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = "https://www.axismedins.com";
const outPath = path.join(__dirname, "..", "public", "sitemap.xml");

const routes = [
  "/",
  "/contact",
  "/diagnosis",
  "/support",
  "/surgery",
  "/veterinary",
];

const today = new Date().toISOString().split("T")[0];

const urls = routes
  .map(
    (route) => `
  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(outPath, xml, "utf8");
console.log("✅ Sitemap generado en:", outPath);
