function Movie(props) {
    const title = props.movieInfo.title
    const runTime = props.movieInfo.hours + "h " + props.movieInfo.minutes + "min"
    
    return(
        <div>
            <h2>Title: {title} </h2>
            <p>Runtime: {runTime}</p>
        </div>
    ) 
}

export default Movie