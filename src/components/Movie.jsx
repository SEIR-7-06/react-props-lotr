import './Movie.css'
import React from 'react'

class Movie extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="movie-container">
                <h1>The Lord of the Rings: {this.props.title}</h1>
                <p>{this.props.hours}:{this.props.minutes}</p>
            </div>
        )
    }
}
export default Movie