import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';



const  App = () => {
  
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs />
        
      </section>
    </div>
  );
}

export default App;
