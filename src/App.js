import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies'

const movieData = [
  {title: 'The Fellowship of the Ring',
  runtime: '2h 58min'},
  {title: 'The Two Towers',
  runtime: '3h 21min'},
  {title: 'The Return of the King',
  runtime: '2h 59min'}
]


function App() {
  
  return (
    <div className="App">
      <Movies movieData={movieData}/>
    </div>
  );
}

export default App;
