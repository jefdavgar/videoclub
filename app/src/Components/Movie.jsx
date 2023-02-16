import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Movie({
  mov_id,
  mov_title,
  mov_year,
  mov_time,
  mov_lang,
  director,
  genres,
  num_o_ratings,
  removeMovieListProp,
  editMovieItemProp,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputValue, setInputValue] = useState(mov_title);
  const [inputId, setInputId] = useState(mov_id);
  const [inputYear, setInputYear] = useState(mov_year);
  const [inputDirector, setInputDirector] = useState(director);
  const [inputGenres, setInputGenres] = useState(genres);
  const [inputLenguaje, setInputLenguaje] = useState(mov_lang);
  const [inputValoration, setInputValoration] = useState(num_o_ratings);
  const [inputTime, setInputTime] = useState(mov_time);

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
    editMovieItemProp({
        _id:inputId, 
        mov_title: inputValue, 
        mov_year: inputYear, 
        mov_time: inputTime, 
        mov_lan:inputLenguaje, 
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
    setInputValue(inputValue);
    setInputId(inputId);
    setInputYear(inputYear)
    setInputDirector(inputDirector)
    setInputGenres(inputGenres)
    setInputLenguaje(inputLenguaje)
    setInputValoration(inputValoration)
    setInputTime(inputTime)
    setShow(false);
  };
  return (
    <tbody>
      <tr>
        <td>{mov_title}</td>
        <td>{mov_year}</td>
        <td>{director}</td>
        <td>{genres}</td>
        <td>{mov_lang}</td>
        <td>{num_o_ratings}</td>
        <td>{mov_time}</td>
        <td>
          <a
            onClick={handleShow}
            href="#"
            className="edit"
            title="Edit"
            data-toggle="tooltip"
          >
            <i className="material-icons">&#xE254;</i>
          </a>
          <a
            onClick={removeMovieListProp}
            href="#"
            className="delete"
            title="Delete"
            data-toggle="tooltip"
            style={{ color: "red" }}
          >
            <i className="material-icons">&#xE872;</i>
          </a>
        </td>
      </tr>
      <div className="model_box">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>MODIFICAR PELICULA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group mt-3">
                <input
                  value={inputId}
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="ID"
                  required
                  readonly unselectable="on"
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
                MODIFICAR PELICULA
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
    </tbody>
  );
}

export default Movie;