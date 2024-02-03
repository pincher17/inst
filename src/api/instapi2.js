export async function getServerSideProps(shortcode) {
    const options = {
      method: 'GET',
      url: `https://instagram243.p.rapidapi.com/postcomments/${shortcode}/{end_cursor}/{scraperid}`,
      headers: {
        'X-RapidAPI-Key': 'e7ce4be56dmsh5a48db0a991fc59p135f27jsn8135aa51b71e',
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      dispa
    } catch (error) {
      console.error(error);
    }

}