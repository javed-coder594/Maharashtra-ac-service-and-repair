const site = "https://maharashtraacservice.com";
export const prerender = true;

const corePaths = [
  "/",
  "/about/",
  "/services/",
  "/contact/",
  "/blog/",
  "/service-areas/",
  "/service-areas/pune/",
  "/service-areas/mumbai/"
];

const posts = Object.values(import.meta.glob("../content/blog/*.md", {
  eager: true,
  import: "frontmatter"
})) as Array<{ slug?: string }>;

export async function GET() {
  const blogPaths = posts
    .map((post) => post.slug)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => `/blog/${slug}/`);

  const urls = [...new Set([...corePaths, ...blogPaths])];
  const entries = urls.map((path) => `  <url><loc>${site}${path}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
