import React from 'react';
import './App.css';
import Movies from './components/Movies'


function App() {

  const moviesArray = [
    {
      movieName: 'The Fellowship of the Ring',
      movieLength: '2hrs 58min'
    },
    {
      movieName: 'The Two Towers',
      movieLength: '2hrs 59min'
    },
    {
      movieName: 'The Return of the King',
      movieLength: '3hrs 21min'
    }
  ]

  return (
    <div className="App">
      <Movies moviesArray={moviesArray} />
    </div>
  );
}

export default App;
