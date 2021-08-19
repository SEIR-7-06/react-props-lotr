import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';

class App extends React.Component {
  render() {
    let movieObj = [
      {
      title: "The Fellowship of the Ring",
      hours: 2,
      minutes:58
      },
      {
        title: 'The Two Towers',
        hours: 2,
        minutes:59
      },
      {
        title: "The Return of the King",
        hours: 3,
        minutes:21
        }
  ]
    const movies =[]
    for (let i = 0; i <movieObj.length; i++){
      movies.push(<Movie 
        title={movieObj[i].title} 
        hours={movieObj[i].hours} 
        minutes={movieObj[i].minutes}/>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="allmovies">
            {movies}
        </div>
        </header>
        
      </div>
    );
  }
}

export default App;
