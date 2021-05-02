import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
    console.log("movie" + props.movies);
    return (
        <div className="container">
            {props.movies.map((movies, i) => <MovieCard key={i} movies={movies}></MovieCard>)}
        </div>
    )
}

export default MovieList
