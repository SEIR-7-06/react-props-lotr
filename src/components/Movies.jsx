function Movies (props) {
    let moviesJSX = [];
    //a for loop for the array of objects
    for(let i = 0; i< props.moviesArray.length; i++){
        console.log(props.moviesArray[i])
    
        const movieName = props.moviesArray[i].movieName
        const movieLength = props.moviesArray[i].movieLength
    moviesJSX.push(
        <div>
            <h2>{movieName}</h2>
            <p>{movieName} runs for {movieLength}</p>
        </div>
        )
    }
       
    return (
        <>
        <h1>Here's The list of Movies:</h1>
        {moviesJSX}
        </>
    )
}

export default Movies