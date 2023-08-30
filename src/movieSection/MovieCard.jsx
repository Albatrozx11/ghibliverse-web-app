import React from "react";
import { useState } from "react";
import "./MovieSection.css";
export default function MovieCard({ movie }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div key={movie.id} className="card-container">
      <img src={movie.image} alt="poster" className="card-poster" />
      <div className="right">
        <h1 className="title">{movie.title}</h1>
        <div className="sub-title">
          <ul>
            <li className="year">{movie.release_date}</li>
            <li className="duration">{movie.running_time}</li>
            <li className="genre">Adventure</li>
          </ul>
        </div>
        <div className="summary">
          <p className={`summary-para ${isExpanded ? "expanded" : ""}`}>
            {movie.description}
          </p>
          {isExpanded ? (
            <a target="blank" onClick={() => setIsExpanded(false)}>
              Read less
            </a>
          ) : (
            <a target="blank" onClick={() => setIsExpanded(true)}>
              Read more
            </a>
          )}
        </div>
        <button className="trailer">
          <a href="https://www.youtube.com/watch?v=CHCUkXUPkFM" target="blank">
            WATCH TRAILER
          </a>
        </button>
      </div>
    </div>
  );
}
