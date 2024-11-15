import { createClient } from 'contentful';
import { writeFile } from 'fs/promises';
import { join } from 'path';

// Contentful configuration
const client = createClient({
  space: 'deugs1v52g73',
  accessToken: '1lQOYwKnIqhWbuSww8XaGsuXhrG6-54NHotbNYKru0Y',
});

async function generateSitemap() {
  try {
    // Fetch entries from Contentful
    const entries = await client.getEntries({
      content_type: 'blogPost', // Replace with your actual content type ID
    });

    // Start with homepage URL
    const urls = [
      `<url>
        <loc>https://skylerdev.netlify.app/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
      </url>`
    ];

    // Add Contentful entries to the sitemap
    entries.items.forEach((item) => {
      const slug = item.fields.slug; // Adjust based on your Contentful setup
      const lastMod = new Date(item.sys.updatedAt).toISOString();
      urls.push(`
        <url>
          <loc>https://skylerdev.netlify.app/${slug}</loc>
          <lastmod>${lastMod}</lastmod>
          <changefreq>weekly</changefreq>
        </url>
      `);
    });

    // Build the sitemap XML
    const sitemapContent = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join('')}
      </urlset>
    `.trim();

    // Write to the public directory
    const outputPath = join(process.cwd(), 'public/sitemap.xml');
    await writeFile(outputPath, sitemapContent);

    console.log('Sitemap generated successfully at:', outputPath);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();