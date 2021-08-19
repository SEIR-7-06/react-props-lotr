import React from 'react'

function Movies(props){


const prefix = 'The Lord of the Rings: '
const movieJSX = []

for(let i=0;i<props.movieData.length;i++){
    movieJSX.push(
      <>
          <h2>{prefix + props.movieData[i].title}</h2>
          <p>{props.movieData[i].runtime}</p>
      </>  
    )
}
return (
    <>
        {movieJSX}
    </>
)

}
 
  
export default Movies;