import type { APIRoute } from 'astro';
import { languages, pageHref, routes, type PageKey } from '../data/site';

export const prerender = true;

const origin = 'https://www.enginyersbosch.com';
const pages = Object.keys(routes.ca) as PageKey[];

export const GET: APIRoute = () => {
  const urls = languages.flatMap((lang) => pages.map((page) => `${origin}${pageHref(lang, page)}`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
