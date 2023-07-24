import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);
  const listMovies = movies.map(movie =>  (
      <div key={movie.title}>
        <p>Name: {movie.title}</p>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map(genre=><li key={genre}>{genre}</li>)}
        </ul>
      </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {
      listMovies
    }
  </div>;
}

export default Movies;
