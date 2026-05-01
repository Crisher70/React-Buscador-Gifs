import axios from 'axios'

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        offset: 0,
        rating: 'g',
        lang: 'es',
        bundle: 'messaging_non_clips',
        api_key: import.meta.env.VITE_GIPHY_API_KEY
    }
})