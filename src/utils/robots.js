import fs from "fs";
import path from "path";

const base_url = window.location.origin; // Get the base URL dynamically

export function generateRobots() {
  const robotsContent = `User-agent: *
Disallow: /admin/
Disallow: /login/
Allow: /

Sitemap: ${base_url}/sitemap.xml
  `;

  fs.writeFileSync(path.resolve("public/robots.txt"), robotsContent);

  console.log("robots.txt generated at public/robots.txt");
}
