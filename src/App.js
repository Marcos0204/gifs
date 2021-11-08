import React, { useState } from 'react';
import './App.css';

const GIFS = ['https://media4.giphy.com/media/YPzzY7lbFBB1fxXaQT/giphy.gif?cid=790b761162fa8a5f68428f6daf299f5e16012a638b9ae550&rid=giphy.gif&ct=g']

const  App = () => {
  const [ gifs, setGifs ] = useState([GIFS])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          [1, 2].map(sigleGifs => <img src={gifs} /> )
        }
      </section>
    </div>
  );
}

export default App;
