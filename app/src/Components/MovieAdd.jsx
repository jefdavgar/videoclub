import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function MovieAdd() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [inputValue, setInputValue] = useState("");
    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    // };
    // const handleMovieSubmit = (e) => {
    //     e.preventDefault();
    //     if (inputValue.trim() === "") return;
    //     addMovie({  }); 

    return (
        <div className='Container'>
            <Button onClick={handleShow}>
                AGREGAR UNA PELICULA
            </Button>

            <div className="model_box">
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>AGREGAR PELICULA</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control" id="addmovie_name" aria-describedby="emailHelp" placeholder="Movie Name" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Year" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Director" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Genres" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Lenguaje" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Valoration" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Movie Time" />
                            </div>

                            <button type="submit" className="btn btn-success mt-4">AGREGAR PELICULA</button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
};

export default MovieAdd