import React, { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';




const  App = () => {
  const [ gifs, setGifs ] = useState([])

  useEffect( () =>{
    async function fetchAPi() {
      const data = await getGifs();
      setGifs(data)
    }
    fetchAPi()

          //  getGifs.then(res => setGifs(res))    
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
