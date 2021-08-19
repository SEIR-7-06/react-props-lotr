function Movie(props) {
    const movieTitle = props.movieInfo.title;
    const movieHours = props.movieInfo.hours;
    const movieMinutes = props.movieInfo.minutes;

    return (
        <div>
            <p>Title: {movieTitle} ({movieHours}:{movieMinutes})</p>
        </div>
    )

}

export default Movie