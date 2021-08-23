function Movie(props) {
    return (
      <div className="Movie">
        <h1>{props.movieName}</h1>
        <h2>{props.movieLength}</h2>
      </div>
    );
  }
  
  export default Movie;