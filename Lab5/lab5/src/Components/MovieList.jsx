import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <div className="movie-list-container">
      <h2>Movies List</h2>
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <h1>Title</h1>
          <h3>{movie.title}</h3>
          <h1>Rating</h1>
          <p className="stars">{"⭐".repeat(movie.rating)}</p>
          <h1>Review</h1>
          {movie.review && <p className="review">"{movie.review}"</p>}
        </div>
      ))}
    </div>
  );
}

export default MovieList;