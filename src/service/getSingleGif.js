import {API_KEY, API_URL} from '../settings/settings'

const fromApiResponseToGif = apiresponse=>{
    const {data} = apiresponse;
    const {title, images, id} = data;
    const {url} = images.downsized_medium;
    return {title, url, id}
}


export default function GetSingleGif({id}){
    return fetch(`${API_URL}/gifs/${id}/?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGif)
}