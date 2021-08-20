import './App.css';
import Movie from './components/Movie';

function App() {
  const movieInfo = [
    {
      title: "The Fellowhsip of the Rings",
      hours: 2,
      minutes: 58
    },
    {
      title: "The Two Towers",
      hours: 2,
      minutes: 59
    },
    {
      title: "The Return of the King",
      hours: 3,
      minutes: 21
    } 
  ]
  
  return (
    <div className="App">
      <h1>LOTR Movie List</h1>
      <Movie 
        movieInfo = {movieInfo[0]}/>
      <Movie 
        movieInfo = {movieInfo[1]}/>
      <Movie 
        movieInfo = {movieInfo[2]}/>
    </div>
  );
}

export default App;
