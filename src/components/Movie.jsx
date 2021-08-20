function Movie(props) {
    return (
        <div>
            <h2>The Lord of the Rings: {props.title} </h2>
            <p> {props.time} </p>
        </div>
    )
}


export default Movie; 