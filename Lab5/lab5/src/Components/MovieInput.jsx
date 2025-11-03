import React, { useState } from "react";
import "./MovieInput.css";

function MovieInput({ addMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;

    addMovie({
      title,
      rating: Number(rating),
      review,
    });

    setTitle("");
    setRating("");
    setReview("");
  };

  return (
    <div className="movie-input-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <p className="label">Title</p>
        <input
          className="movie-title"
          placeholder="Enter the movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className="label">Rating</p>
        <input
          className="movie-rating"
          type="number"
          min="1"
          max="5"
          placeholder="Enter your rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <p className="label">Review</p>
        <input
          className="movie-review"
          placeholder="Enter your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <button type="submit" className="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieInput;