import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "./MovieSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function MovieCard({ movie, number }) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchTrailerData = async () => {
    try {
      const tmdbApiKey = process.env.b74e790005d9630f5e2a0955b4600bf9;
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(
          movie.title
        )}`
      );

      const firstResult = response.data.results[0];
      if (firstResult && firstResult.key) {
        setShowTrailer(true);
        setTrailerUrl(`https://www.youtube.com/watch?v=${firstResult.key}`);
        console.log(trailerUrl);
      } else {
        setShowTrailer(false);
      }
    } catch (error) {
      <h1>{`Error fetching trailer data: ${error}`}</h1>;
    }
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container">
      <div className="timeline" data-aos="fade-down">
        <div className="line"></div>
        <div className="circle">
          <h2>{number}</h2>
        </div>
        <div className="line"></div>
      </div>
      <div key={movie.id} className="card-container" data-aos="fade-left">
        <img src={movie.image} alt="poster" className="card-poster" />
        <div className="right">
          <h1 className="title">{movie.title.toUpperCase()}</h1>
          <div className="sub-title">
            <ul>
              <li className="year">{movie.release_date}</li>
              <li className="duration">{`${movie.running_time} min`}</li>
              <li className="genre">Adventure</li>
            </ul>
          </div>
          <div className="summary">
            <p className="summary-para">
              {movie.description}
            </p>
            <a href="/MovieInfo">
                Read more
            </a>
          </div>
          <button className="trailer" onClick={fetchTrailerData}>
            <a href="#!">WATCH TRAILER</a>
          </button>
          {showTrailer && trailerUrl && (
            <ReactPlayer
              url={trailerUrl}
              controls={true}
              width="100%"
              height="auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}
