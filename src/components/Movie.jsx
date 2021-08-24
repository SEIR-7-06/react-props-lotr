import React from "react";


function Movie(props) {
  

  return (
    <div className="movie">
      <h1 className="title">{props.movieTitle}</h1>
      <h6 className="small">{props.runTime}</h6>
    </div>
  );
}

export default Movie;