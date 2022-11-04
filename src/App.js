import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './components/Navbare';
import { Data } from './Data';
import { useState } from 'react';
import MovieCard from './components/MovieCard';


function App() {

  const [movies, setMovies] = useState(Data)
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState("")

  const ratingChanged=(e) => {
    setRating(e)
  }

  const handleSearch=(text) => {
    setSearch(text)
  }

  return (
    <div className="App">

      <Navbare handleSearch={handleSearch} ratingChanged={ratingChanged}/>
      <MovieCard movies={movies} search={search} rating={rating} />


    </div>

  );
}

export default App;
