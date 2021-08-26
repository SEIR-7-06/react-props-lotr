import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'

function App() {

  const movieInfo = [
    {
    movieName:'The Fellowship of the Ring',
    movieHours:2,
    movieMinutes:58,
    },{
    movieName:'The Two Towers',
    movieHours:2,
    movieMinutes:59,
    },{
    movieName:'The Return of the King',
    movieHours:3,
    movieMinutes:21,
    }
]
  return (
    <div className="App">
      
      <Movie
      movieInfo= {movieInfo[0]}
      />

      <Movie
      movieInfo= {movieInfo[1]}
      />

      <Movie
      movieInfo= {movieInfo[2]}
      />

    </div>
  );
}

export default App;
