function Movie(props) {
    // let title = [
    //     "The Fellowship of the Ring",
    //     "The Two Towers",
    //     "The Return of the King",
    //   ]

    // let lotr = title.map(lotr => {
    //     return <p>{ lotr }</p>
    //   })

    let titleJSX = [];

    for (let i = 0; i < props.title.length; i++) {

      const movieTitle = props.title[i].lotr
      const movieHours = props.title[i].hours
      const movieMins = props.title[i].minutes
      titleJSX.push(
        <div>
          <h1>The Lord of the Rings: { movieTitle }</h1>
          <p>{ movieHours }h { movieMins }m</p>
        </div>

      )
    }

    console.log(titleJSX);

    return(
        <div>
            {/* <h1>The Lord of the Rings:{lotr[0] }</h1> */}
            {/* <p>{ props.hours }h { props.minutes }min</p> */}
            {titleJSX}
        </div>
    )
}

export default Movie