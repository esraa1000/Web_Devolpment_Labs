import React, { useState } from "react";
import MovieInput from "./Components/MovieInput";
import MovieList from "./Components/MovieList";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <MovieInput addMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;