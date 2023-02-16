import "./App.css";
import MovieAdd from "./Components/MovieAdd";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import movies from "./api/index";

const title = "VIDEOLOPERS CLUB";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await movies.get("/movies");
      setMovieList(data);
    }

    fetchData();
  }, []);

  const addMovie = async (item) => {
    const { data } = await movies.post("/movies", item);
    setMovieList((oldlist) => [...oldlist, data]);
  };

  const removeMovie = async (id) => {
    await movies.delete(`/movies/${id}`);
    setMovieList((oldList) => {
      return oldList.filter((item) => item._id !== id);
    });
  };

  const editMovie = async (id, item) => {
    await movies.put(`/movies/${id}`, item);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">{title}</h1>
        <MovieAdd addMovie={addMovie} />
      </div>
      <hr />
      <MovieList editMovieListProp={editMovie} removeMovieListProp={removeMovie} list={movieList} />
      <Footer />
    </div>
  );
}

export default App;
