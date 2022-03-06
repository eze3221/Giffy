const apiResponseToGif = apiResponse =>{
    const {data = []} = apiResponse;
    return data;
}


export default function getTrendingGifs(){
  
    const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa`
    return fetch(apiURL)
      .then(res=> res.json())
      .then(apiResponseToGif)
  }