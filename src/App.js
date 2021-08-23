import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Movie 
          movieName='The Fellowship of the Ring' 
          movieLength='2h 58min' />
          <Movie 
          movieName='The Two Towers' 
          movieLength='2h 59min' />
          <Movie 
          movieName='The Return of the King' 
          movieLength='3h 21min' />
        </a>
      </header>
    </div>
  );
}

export default App





