function Movies(props){
const prefix = 'The Lord of the Rings: '
const movieNames = ['The Fellowship of the Ring', 'The Two Towers', 'The Return of the King']
const runTimes = ['2h 58min','3h 21min','2h 59min']
for (let i=0;i<movieNames.length;i++){

    return(
        <div>
            <h2>{prefix + movieNames[i]}</h2>
            <p>{runTimes[i]}</p>
            <h2>{prefix + movieNames[i+1]}</h2>
            <p>{runTimes[i+1]}</p>
            <h2>{prefix + movieNames[i+2]}</h2>
            <p>{runTimes[i+2]}</p>
        </div>)
    }
}
export default Movies;