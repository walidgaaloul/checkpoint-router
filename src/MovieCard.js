import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export default function MovieCard({ movies }) {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };



    return (

        <div className="movie">
            <img src={movies.imgSrc} className="movie-img" />
            <div className="movie-info">
                <div className="title"> {movies.titre}</div>
                <p className="genres">Action / Drama / sci-fic</p>
                <div className="summary"><div className="text"> {movies.description}</div></div>
                <div className="actions">
                    <button><i className="fa fa-palay"></i><Link to={`/Trailer/${movies.id}`}>watch trailer</Link></button>
                </div>
                <div>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    /></div>
            </div>
        </div>

    )

}
