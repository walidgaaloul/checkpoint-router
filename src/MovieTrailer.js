import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieData } from "./movieData";
import './MovieTrailer.css';
import image from "./oblivionbg.jpg";
import ReactStars from "react-rating-stars-component";


const MovieTrailer = ({ match }) => {
    const [movies, setMovies] = useState({});
    useEffect(() => {
        // console.log("test", MovieData.find((movies) => movies.id === +match.params.id));

        setMovies(MovieData.find((movies) => movies.id === +match.params.id));
    }, [match]);
   
   
   
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };


    console.log(movies.imgSrc)


    return (

        <div className="MovieTrailer-logo" style={{ backgroundImage: `url(../${movies.backGround})` }}>
            <div className="MovieTrailer" >

                <div id="Movie-container">
                    <div className="Movie-info">
                        <img src={movies.imgSrc} className="movies-img" />
                        <div className="Tiltle">
                            {movies.titre}
                        </div>
                        <div className="Movie-Star">
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            /></div>
                   
                        <p>{movies.description}</p>
                        <div>
                            <button>download</button>  <button>streaming</button>
                            <hr />
      <Link to="/">
        <button >Go Back</button>
      </Link>
                        </div>
                    </div>
                    
                    <iframe
                        src={movies.Trailer}
                        title="myMovie"
                        width="853"
                        height="480"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                     
                </div>
            </div>
        </div>


    );
};

export default MovieTrailer;