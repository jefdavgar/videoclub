import './App.css'
import MovieAdd from './Components/MovieAdd'
import MovieList from './Components/MovieList'
import Footer from './Components/Footer'

const title = "VIDEOLOPERS CLUB"

function App() {
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('');
      const movieData = await response.json();
      setTodoList(movieData);
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>{title}</h1>
        <MovieAdd/>
      </div>
      <hr />
      <MovieList/>
      <Footer/>
    </div>
  )
}

export default App
