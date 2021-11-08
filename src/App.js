import React, { useState, useEffect } from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=gu8hS8GASdStQPdF1rMsxSXyy8SwlZ27&q=pandas&limit=25&offset=0&rating=g&lang=en'


const  App = () => {
  const [ gifs, setGifs ] = useState([])

  useEffect(() =>{
    fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
      const { data } = response;
      if( Array.isArray(data)) {
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      }
    })
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((sigleGifs, index) => <img src={sigleGifs} key={index} alt='img panda'/> )
        }
      </section>
    </div>
  );
}

export default App;
