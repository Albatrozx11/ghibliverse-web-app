import React from "react";
import logo from "../assets/images/RT-img.png";
export default function MovieInfo({ movie }) {
  return (
    <>
      <div className="movie-info">
        <div className="director-section">
          <h2 className="info">DIRECTOR</h2>
          <h4 className="info-name">{movie.director.toUpperCase()}</h4>
        </div>
        <div className="producer-section">
          <h2 className="info">PRODUCER</h2>
          <h4 className="info-name">{movie.producer.toUpperCase()}</h4>
        </div>
        <div className="rt-score-section">
          <h2 className="info">RT SCORE</h2>
          <div className="rt-container">
            <img src={logo} alt="rotten-tomato" className="rt-logo" />
            <h4 className="info-name score">{`${movie.rt_score}%`}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
