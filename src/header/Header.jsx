import React from "react";
import "./Header.css";
import headerImage from "../assets/images/header.png";
import MovieSection from "../movieSection/MovieSection";
export default function Header() {
  return (
    <div>
      <div className="header-content">
        <img src={headerImage} alt="header" className="header-img" />
        <h2 className="header-title">GhibliVerse</h2>
        <div className="header-summary">
          <p align="justify">
            Studio Ghibli is a renowned Japanese animation studio that has made
            a significant impact on global cinema. Founded in 1985 by Hayao
            Miyazaki, Isao Takahata, and Toshio Suzuki, Ghibli is known for
            creating visually stunning and emotionally resonant animated films.
            Their works often explore themes of nature, humanity, and the
            fantastical, captivating audiences of all ages. Ghibli's films,
            including classics like "My Neighbor Totoro," "Spirited Away," and
            "Princess Mononoke," have garnered critical acclaim and a dedicated
            fanbase worldwide. The studio's distinctive hand-drawn animation
            style, intricate storytelling, and profound cultural significance
            have solidified its legacy as a powerhouse in the animation
            industry.
          </p>
        </div>
      </div>
      <MovieSection />
    </div>
  );
}
