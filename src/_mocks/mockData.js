// const API_KEY = 'pub_dbe36437e9ff4b84a0af448490a47be0';
// const BASE_URL = 'https://newsdata.io/api/1/latest';
import product1 from '@/assets/images/products/product_1.jpg';
import product2 from '@/assets/images/products/product_2.jpg';
import product3 from '@/assets/images/products/product_3.jpg';
import product4 from '@/assets/images/products/product_4.jpg';
/**
 * Fetches news articles from the NewsData API for a given country code.
//  * @param {string} countryCode == 'cn' - Country code (e.g., 'us', 'cn', 'in')
 * @returns {Promise<Array>} - Array of news articles
 */
async function fetchNews() {
  try {
    const response = {
      page_identifier: 0,
      req_id: '123',
      result: [
        {
          id: 1,
          link: '',
          title: 'Key discussions around global security and AI weapon policies were held in D.C',
          description: 'The ambitious lunar mission marks a leap in India’s space exploration journey ',
          image_url: '<data value="http://192.168.5.65/img1.jpg" data-type="Asset" data-caption="A Z-20 in China Coast Guard livery seen here flying from <i>haijing</i>" data-credit="Malaysian Maritime Enforcement Agency"></data>',
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
        {
          id: 2,
          link: '',
          title: 'Biden Meets with NATO Leaders',
          description: 'Key discussions around global security and AI weapon policies were held in D.C.',
          image_url: '<data value="http://192.168.5.65/img1.jpg" data-type="Asset" data-caption="A Z-20 in China Coast Guard livery seen here flying from <i>haijing</i>" data-credit="Malaysian Maritime Enforcement Agency"></data>',
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
        {
          id: 3,
          link: '',
          title: 'Tech Stocks Rally on Wall Street',
          description: 'Major indices saw gains as tech stocks led the charge amid earnings optimism.',
          image_url: '<data value="http://192.168.5.65/img1.jpg" data-type="Asset" data-caption="A Z-20 in China Coast Guard livery seen here flying from <i>haijing</i>" data-credit="Malaysian Maritime Enforcement Agency"></data>',
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
        {
          id: 4,
          link: '',
          title: 'Tech Stocks',
          description: 'Major indices saw gains as tech stocks led the charge amid earnings optimism.',
          image_url: product4,
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
        {
          id: 5,
          link: '',
          title: 'Key discussions around global security and AI weapon policies were held in D.C',
          description: 'The ambitious lunar mission marks a leap in India’s space exploration journey ',
          image_url: product1,
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
        {
          id: 6,
          link: '',
          title: 'Biden Meets with NATO Leaders',
          description: 'Key discussions around global security and AI weapon policies were held in D.C.',
          image_url: product2,
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
        {
          id: 7,
          link: '',
          title: 'Tech Stocks Rally on Wall Street',
          description: 'Major indices saw gains as tech stocks led the charge amid earnings optimism.',
          image_url: product3,
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
        {
          id: 8,
          link: '',
          title: 'Tech Stocks',
          description: 'Major indices saw gains as tech stocks led the charge amid earnings optimism.',
          image_url: product4,
          classifications: ["chad", "china", "israel", "poland"],
          last_updated: "2025-08-29T10:45:00Z" // ISO date string
        },
      ]
    }
    // const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_dbe36437e9ff4b84a0af448490a47be0&country=${countryCode}`);

    const data = response;
    // const data =response.json();
    return data || [];
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
}

export default fetchNews;


