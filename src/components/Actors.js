import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors);
  const actorsList = actors.map(actor => (
    <div key={actor.name}>
    <p>Name: {actor.name}</p>
    <p>Movies:</p>
    <ul>
      {actor.movies.map(movie=><li key={movie}>{movie}</li>)}
    </ul>
  </div>
  ))
  return <div> <h1>Actors Page</h1>
  {
    actorsList
  }
  </div>;
}

export default Actors;
