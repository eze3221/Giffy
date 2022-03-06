export default function getGif({
    keyword = "",
    limit = 15,
    rating = "g",
    page = 0,
  } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q=${keyword}&limit=${limit}&offset=${
      page * limit
    }&rating=${rating}&lang=en`
  
    return fetch(apiURL)
      .then((res) => res.json())
      .then(res => {
          const {data} = res;
        const gifs = data.map(image=>{
            const {images, id, title} = image;
            const {url} = images.downsized_medium;
            return {url, id, title}
        })
        return gifs;
      })
  }