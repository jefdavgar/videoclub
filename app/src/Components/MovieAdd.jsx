import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MovieAdd({ addMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValue, setInputValue] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputDirector, setInputDirector] = useState("");
  const [inputGenres, setInputGenres] = useState("");
  const [inputLenguaje, setInputLenguaje] = useState("");
  const [inputValoration, setInputValoration] = useState("");
  const [inputTime, setInputTime] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputIdChange = (e) => {
    setInputId(e.target.value);
  };
  const handleInputYearChange = (e) => {
    setInputYear(e.target.value);
  };
  const handleInputDirectorChange = (e) => {
    setInputDirector(e.target.value);
  };
  const handleInputGenresChange = (e) => {
    setInputGenres(e.target.value);
  };
  const handleInputLenguajeChange = (e) => {
    setInputLenguaje(e.target.value);
  };
  const handleInputValorationChange = (e) => {
    setInputValoration(e.target.value);
  };
  const handleInputTimeChange = (e) => {
    setInputTime(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addMovie({
        _id:inputId, 
        mov_title: inputValue, 
        mov_year: inputYear, 
        mov_time: inputTime, 
        mov_lang: inputLenguaje, 
        director:{dir_name:inputDirector}, 
        genres: [inputGenres],
        ratings: [
        {
          rev_id: undefined,
          rev_stars: undefined,
          num_o_ratings: inputValoration,
          rev_name: undefined,
        }],
        actors: [
            {
              act_name: undefined,
              act_gender: undefined,
              act_birthday: undefined,
              act_birthplace: undefined,
            }
          ]
    })
    setInputValue("");
    setInputId("");
    setInputYear("")
    setInputDirector("")
    setInputGenres("")
    setInputLenguaje("")
    setInputValoration("")
    setInputTime("")
    setShow(false);
  };
  // const [inputValue, setInputValue] = useState("");
  // const handleInputChange = (e) => {
  //     setInputValue(e.target.value);
  // };
  // const handleMovieSubmit = (e) => {
  //     e.preventDefault();
  //     if (inputValue.trim() === "") return;
  //     addMovie({  });
  return (
    <div className="Container">
      <Button onClick={handleShow}>AGREGAR UNA PELICULA</Button>

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
            <form onSubmit={handleFormSubmit}>
            <div className="form-group mt-3">
                <input
                  value={inputId}
                  onChange={handleInputIdChange}
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="ID"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="addmovie_name"
                  aria-describedby="emailHelp"
                  placeholder="Movie Name"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                value={inputYear}
                onChange={handleInputYearChange}
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Year"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                 value={inputDirector}
                 onChange={handleInputDirectorChange}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Director"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                 value={inputGenres}
                 onChange={handleInputGenresChange}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Genres"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                value={inputLenguaje}
                onChange={handleInputLenguajeChange}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Lenguaje"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                value={inputValoration}
                onChange={handleInputValorationChange}
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Valoration"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                value={inputTime}
                onChange={handleInputTimeChange}
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Movie Time"
                  required
                />
              </div>

              <button type="submit" className="btn btn-success mt-4">
                AGREGAR PELICULA
              </button>
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
  );
}

export default MovieAdd;
