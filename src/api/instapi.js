import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://api.instagapi.com/postcomments',
    headers: {
        'accept': 'application/json',
        'X-InstagAPI-Key': '6d57e908d5f2a034459d1b1038bdb348'
      },
})

export const instAPI = {
    getComments(shortcode){
        return instance.get(`/${shortcode}/{end_cursor}/{scraperid}`).then(response =>{
            return response;
        })
    },
}