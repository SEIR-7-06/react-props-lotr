
import React from 'react'
import './App.css';
import Movie from './components/Movie'


function App() {
  const MovieInfo = {
    MovieName:' The Fellowship of the Ring',
    runTime: 2.58,
  }

  const MovieInfo2 = {
    MovieName:'The Two Towers',
    runTime: 2.59,
  }

  const MovieInfo3 = {
    MovieName:'The Return of the King',
    runTime: 3.21,
  }




  return (
    <div className="App" id="">
 <Movie MovieInfo={MovieInfo} MovieInfo2={MovieInfo2} MovieInfo3={MovieInfo3} />
  
  
 
      
    </div>
  );
}

export default App;