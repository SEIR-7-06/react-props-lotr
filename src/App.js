import Movies from './components/Movies'

function App() {
  const moviesArray = [
    {
      name: 'The Fellowship of the Ring',
      hours: 2,
      minutes: 58
    },
    {
      name: 'The Two Towers',
      hours: 2,
      minutes: 59
    },
    {
      name: 'The Return of the King',
      hours: 3,
      minutes: 21
    }
  ]
  return (
    <div>
      <Movies moviesArray={moviesArray} />
    </div>
  );
}

export default App;
