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
    cn: [
      {
      id: 1,
      link: '',
      title: 'Key discussions around global security and AI weapon policies were held in D.C',
      description: 'The ambitious lunar mission marks a leap in India’s space exploration journey ',
      image_url: product1,
    },
    {
      id: 2,
      link: '',
      title: 'Biden Meets with NATO Leaders',
      description: 'Key discussions around global security and AI weapon policies were held in D.C.',
      image_url: product2,
    },
    {
      id: 3,
      link: '',
      title: 'Tech Stocks Rally on Wall Street',
      description: 'Major indices saw gains as tech stocks led the charge amid earnings optimism.',
      image_url: product3,
    },
    {
      id: 4,
      link: '', 
      title: 'Tech Stocks',
      description: 'Major indices saw gains as tech stocks led the charge amid earnings optimism.',
      image_url: product4,
    },
  ]
}
    // const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_dbe36437e9ff4b84a0af448490a47be0&country=${countryCode}`);
 
    const data =response;
    
    // const data =response.json();
    return data || [];
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
}

export default fetchNews;

 
