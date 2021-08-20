import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';

function App() {
  let title = [
    {
      lotr: "The Fellowship of the Ring",
      hours: "2",
      minutes:"58"

    },
    {
      lotr:"The Two Towers",
      hours: "2",
      minutes:"59"

    }, 
    {
      lotr: "The Return of the King",
      hours: "3",
      minutes:"21"
    }, 


      ]

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie title={title}/>
    
      {/* <Movie title="The Two Towers" hours="2" minutes="59" />
      <Movie title="The Return of the King" hours="3" minutes="21" /> */}
      </header>
    </div>
  );
}

export default App;
