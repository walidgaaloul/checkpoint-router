import React, { useState } from 'react'
import { Form, Col, Button, Navbar, Nav, FormControl, Modal } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

const Test = ({ handleMovieAdd, show}) => {
    
    const handleClose = () => show.setShow(false);
    

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
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input name="titre" type='text' value={newMovie.titre} placeholder='Titre'
                        onChange={handleChange}></input>
                    <input name="description" type='text' value={newMovie.description} placeholder='Description'
                        onChange={handleChange}
                    ></input>
                    <input name="url" type='text' value={newMovie.Url} placeholder='Url'
                        onChange={handleChange}
                    ></input>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleSave,handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
            
            
            
            
        </>
    )

}
export default Test

