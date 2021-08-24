import React from "react";
import './App.css';
import Movie from "./components/Movie";

import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie movieTitle="The Lord of the Rings: The Fellowship of the Ring" runTime="2h 58min" />
        <Movie movieTitle="The Lord of the Rings: The Two Towers" runTime="2h 59min"/>
        <Movie movieTitle="The Lord of the Rings: The Return of the King" runTime="3h 21min"/>
        
      </header>
      
    </div>
  );
}

export default App;
