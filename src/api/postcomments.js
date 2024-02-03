// pages/api/postcomments.js

export default async function handler(req, res) {
    // Define the URL and headers
    const url = 'https://api.instagapi.com/postcomments/C1q4-6nqJZl/';
    const headers = {
      'X-InstagAPI-Key': '6d57e908d5f2a034459d1b1038bdb348'
    };
  
    try {
      // Make the HTTP request
      const response = await fetch(url, {
        headers: headers
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Return the data
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  