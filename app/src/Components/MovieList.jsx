import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";
import axios from "axios";
import { Table } from "react-bootstrap";

function MovieList({ list, removeMovieListProp, editMovieListProp }) {

  const renderedList = list.map((item) => (
    <Movie
      mov_id={item._id}
      mov_title={item.mov_title}
      mov_year={item.mov_year}
      mov_time={item.mov_time}
      mov_lang={item.mov_lang}
      director={item.director.dir_name}
      genres={item.genres[0]}
      num_o_ratings={item.ratings[0].num_o_ratings}
      removeMovieListProp={(e) =>
        axios
          .delete(`https://videoclub-3nze.onrender.com/movies/${item._id}`)
          .then(() => removeMovieListProp(item._id))
      }
      editMovieItemProp={(updatedItem) =>
        editMovieListProp(item._id, updatedItem)
      }
      key={item._id}
    />
  ));

  return (
    <div className="p-3 rounded">
      <Table responsive>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Year</th>
            <th>Director</th>
            <th>Genres</th>
            <th>Lenguaje </th>
            <th>Valoration</th>
            <th>Movie Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <>
          {renderedList}
        </>
      </Table>
    </div>
  );
}

export default MovieList;
