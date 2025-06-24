import fs from "fs";
import path from "path";

const base_url = window.location.origin; // Get the base URL dynamically

export function generateSitemap(pages) {
  const baseUrl = base_url;

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  `;

  // Loop through pages and add each URL to sitemap
  pages.forEach((page) => {
    sitemapContent += `
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    `;
  });

  sitemapContent += `</urlset>`;

  // Write to public directory
  fs.writeFileSync(path.resolve("public/sitemap.xml"), sitemapContent);

  console.log("Sitemap generated at public/sitemap.xml");
}
