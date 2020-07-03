import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "The Dark Knight",
      price: "$100",
      id: 2566124,
    },
    {
      name: "Remember the Titans",
      price: "$80",
      id: 23524,
    },
    {
      name: "Shutter Island",
      price: "$70",
      id: 26543,
    },
    {
      name: "Inception",
      price: "$85",
      id: 285693,
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export default MovieList;
