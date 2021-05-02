import React, { useEffect, useState } from "react";
import './MovieCard.css';
import { Form, Col, Button, Navbar, Nav, FormControl, Modal } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";
import MovieAdd from "./MovieAdd"
import Filtre from "./Filtre"
import Test from "./Test"
import { MovieData } from "./movieData";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieTrailer from './MovieTrailer';



const Home = () => {

    const [movies, setMovies] = useState(MovieData);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleMovieAdd = (newValue) => {
        setMovies([...movies, newValue]);
    };

    const handleChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };
    useEffect(() => {
        const results = movies.filter(movie =>
            movie.titre.toLowerCase().includes(searchTerm)
        );

        setSearchResults(results);
        console.log(searchResults.map(item => (
            { item }
        )))
    }, [searchTerm]);



    return (
        

            <div className='AppMovies'>




                
                <>
                    <Navbar bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand href="#home">Movie Card</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link href="#novelty">novelty</Nav.Link>
                            <Nav.Link href="#My list">My list</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Filtre type="text" placeholder="Search" className="mr-sm-2" searchTerm={searchTerm} handleChange={handleChange} />

                            <Button variant="outline-info"  onClick={handleShow}>Add Movie</Button>
                        </Form>
                    </Navbar>



                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <MovieAdd handleMovieAdd={handleMovieAdd}></MovieAdd>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
          </Button>

                        </Modal.Footer>
                    </Modal>
                </>



                <MovieAdd handleMovieAdd={handleMovieAdd}></MovieAdd>


                <MovieList movies={movies.filter(movie => movie.titre.toLowerCase().includes(searchTerm))} />
            </div>
       
    );
};

export default Home;
