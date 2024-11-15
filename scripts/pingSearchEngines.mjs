import axios from 'axios';

const sitemapUrl = 'https://skylerdev.com/sitemap.xml';

async function pingSearchEngines() {
  try {
    await axios.get(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    console.log('Sitemap submitted to Google.');

    await axios.get(`https://www.bing.com/ping?sitemap=${sitemapUrl}`);
    console.log('Sitemap submitted to Bing.');
  } catch (error) {
    console.error('Error submitting sitemap:', error.message);
  }
}

pingSearchEngines();