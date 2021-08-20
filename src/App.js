
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
    <Movie 
    title="The Fellowship of the Ring"
    time="2h 58min"  
    />
    <Movie 
    title="The Two Towers"
    time="2h 59min"  
    />
    <Movie 
    title="The Return of the King"
    time="3h 21min"  
    />

    
      </header>





    </div>



  );
}

export default App;
