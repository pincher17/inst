import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://api.instagapi.com/postcomments/',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        
        'X-InstagAPI-Key': '6d57e908d5f2a034459d1b1038bdb348'
      }
})

export const instAPI = {
    getComments(shortcode){
        return instance.get(`${shortcode}`).then(response =>{
            return response;
        })
    },
}