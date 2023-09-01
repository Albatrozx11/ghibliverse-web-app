import React from "react";
import "./MovieInfo.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInfo from "./MovieInfo";
export default function Hero() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // Fetch the movie details based on the ID
    axios
      .get(`https://ghibliapi.vercel.app/films/${id}`)
      .then((response) => {
        setMovie(response.data);
        setIsActive(true);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);
  if (!movie.title) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className="main-container">
      <div className="movie-container">
        <div className={`left-section ${isActive ? "active" : ""}`}>
          <img src={movie.image} alt="" className="poster-image" />
        </div>
        <div className={`right-section ${isActive ? "active" : ""}`}>
          <h2 className="movie-title">{movie.title.toUpperCase()}</h2>
          <h3 className="original-title">{movie.original_title}</h3>
          <a href="#!" className="btn">
            WATCH NOW
          </a>
          <div className="movie-summary-cont">
            <p className="movie-summary">{movie.description}</p>
          </div>
        </div>
      </div>
      <MovieInfo movie={movie} />
    </div>
  );
}
