import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);
  const directorsList = directors.map(director => (
    <div key={director.name}>
    <p>Name: {director.name}</p>
    <p>Movies:</p>
    <ul>
      {director.movies.map(movie=><li key={movie}>{movie}</li>)}
    </ul>
  </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {
      directorsList
    }
  </div>;
}

export default Directors;
