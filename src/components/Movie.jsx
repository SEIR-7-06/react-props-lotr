function Movie(props) {

const lotrName =props.MovieInfo.MovieName;
const lotrTime =props.MovieInfo.runTime;
const lotrName2=props.MovieInfo2.MovieName;
const lotrTime2=props.MovieInfo2.runTime;
const lotrName3=props.MovieInfo3.MovieName;
const lotrTime3=props.MovieInfo3.runTime;

  return (
    <div className="App">
      
        <p>
        <h1>movie: {lotrName}</h1>
        <h2>runtime: {lotrTime}</h2>
        </p>

        <p>
        <h1>movie: {lotrName2}</h1>
        <h2>runtime: {lotrTime2}</h2>
        </p>
     
        <p>
        <h1>movie: {lotrName3}</h1>
        <h2>runtime: {lotrTime3}</h2>
        </p>
    </div>
  );
}

export default Movie;
