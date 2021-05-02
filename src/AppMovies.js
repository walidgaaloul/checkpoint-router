import React, { useEffect, useState } from "react";
import './MovieCard.css';
import { Form, Col, Button, Navbar, Nav, FormControl, Modal } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

import Filtre from "./Filtre"
import Test from "./Test"
import Home from "./Home";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieTrailer from './MovieTrailer';



const AppMovies = () => {



    return (
        <Switch>



            <Route exact path="/" component={Home} />
            <Route exact path="/Trailer/:id" component={MovieTrailer} />




        </Switch>
    );
};

export default AppMovies;
