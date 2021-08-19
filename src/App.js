import Movie from './components/Movie';
import './App.css';

function App() {
    const movieInfo = [
        { title: 'The Fellowship of the Ring', hours: 2, minutes: 58},
        { title: 'The Two Towers', hours: 2, minutes: 59},
        { title: 'The Return of the King', hours: 3, minutes: 21}
    ]

    const movies = [];
    for (let i=0; i<movieInfo.length; i++) {
        const movie = <p>Lord of the Rings: {movieInfo[i].title} ({movieInfo[i].hours}:{movieInfo[i].minutes})</p>
        movies.push(movie)
    }
    console.log(movies)
    return (
        <>
        <div>
            {movies}
        </div>
        </>
    )


}

export default App;
