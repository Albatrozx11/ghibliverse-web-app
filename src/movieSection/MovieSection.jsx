import React from "react";
import { useState, useEffect } from "react";
import "./MovieSection.css";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default function MovieSection() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovieData();
  }, []);
  const getMovieData = async () => {
    try {
      const response = await fetch("https://ghibliapi.vercel.app/films");
      const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="container">
      <h1 className="header">MOVIES</h1>
      <div className="movie-cards">
        {movieData.map((movie, index) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard key={movie.id} movie={movie} number={index + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
}
