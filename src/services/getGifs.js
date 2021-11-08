import axios from 'axios'

const apiKey = 'gu8hS8GASdStQPdF1rMsxSXyy8SwlZ27'



const getGifs = async({keyWord='morty'}={}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=25&offset=0&rating=g&lang=en`
    const {data : {data}} = await axios.get(apiURL)
   
    if( Array.isArray(data)) {
        const gifs = data.map(image => image.images.downsized_medium.url)
        return(gifs)
    }
}

export default getGifs


// export default function getGifs () {
//     return fetch(apiURL)
//     .then(res => res.json())
//     .then(response =>{
//       const { data } = response;
//       if( Array.isArray(data)) {
//         const gifs = data.map(image => image.images.downsized_medium.url)
//         return gifs
//       }
//     })
// }