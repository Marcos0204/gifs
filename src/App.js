import React from 'react';
import { Route, Link } from "wouter";
import './App.css';
import ListOfGifs from './components/ListOfGifs';



const  App = () => {
  
  return (
    <div className="App">
      <section className="App-content">
        <h2>App</h2>
        <Link to='/gif/pandas'>gif de pandas</Link>
        <Link to='/gif/rick'>gif de rick</Link>
        <Link to='/gif/venezuela'>gif de venezuela</Link>
        <Link to='/gif/barbie'>gif de barbie</Link>
        <Route path='/gif/:keyWord' component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
