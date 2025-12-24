import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://fluxdm.space';
const POSTS_DIR = path.resolve(__dirname, '../src/content/posts');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Static routes
const routes = [
    '',
    '/pricing',
    '/affiliates',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
    '/contact-sales',
    '/mission',
    '/careers',
    '/data-deletion'
];

async function generateSitemap() {
    // Get all blog posts
    let posts = [];
    try {
        if (fs.existsSync(POSTS_DIR)) {
            posts = fs.readdirSync(POSTS_DIR)
                .filter(file => file.endsWith('.md'))
                .map(file => {
                    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
                    // Simple regex to extract date if present, else use file mtime
                    const dateMatch = content.match(/date:\s*["']?([^"'\n]+)["']?/);
                    const date = dateMatch ? dateMatch[1] : new Date().toISOString();
                    return {
                        slug: file.replace('.md', ''),
                        date
                    };
                });
        }
    } catch (err) {
        console.warn('No posts directory found or error reading it:', err);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
