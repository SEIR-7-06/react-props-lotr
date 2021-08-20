function Movies(props) {
    let moviesJSX = []; 

    for (let i = 0; i < props.moviesArray.length; i++) {
        const name = props.moviesArray[i].name;
        const hours = props.moviesArray[i].hours;
        const minutes = props.moviesArray[i].minutes;

        moviesJSX.push(
            <div>
                <h2>{name}</h2>
                <p>{hours}h {minutes}min</p>
            </div>
        )
    }
    return (
        <>
        {moviesJSX}
        </>
    )
}

export default Movies