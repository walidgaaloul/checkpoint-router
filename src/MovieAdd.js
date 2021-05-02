import React, { useState } from 'react';
import {Button} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieAdd = ({ handleMovieAdd }) => {
    const [newMovie, setNewMovie] = useState({

        titre: '',
        description: '',
        url: '',
        note: ''

    })
    const handleChange = (e) => {
        setNewMovie({
            ...newMovie, [e.target.name]: e.target.value
        })
    }
    const handleSave = () => {
        handleMovieAdd(newMovie)
        setNewMovie({
            titre: '',
            description: '',
            url: '',
            note: ''
        })

    }
    return (
        <div>
            <input name="titre" type='text' value={newMovie.titre} placeholder='Titre'
                onChange={handleChange}></input>
            <input name="description" type='text' value={newMovie.description} placeholder='Description'
                onChange={handleChange}
            ></input>
            <input name="url" type='text' value={newMovie.Url} placeholder='Url'
                onChange={handleChange}
            ></input>  < Button variant="outline-info" onClick={handleSave}>save movie</Button>

        </div>
    )

}
export default MovieAdd