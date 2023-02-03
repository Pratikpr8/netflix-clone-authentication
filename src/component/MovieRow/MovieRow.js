import React, { useState, useEffect, useRef } from "react";
import { basicImgUrlPath } from "../../constants/urlconstants";
import axios from "../../Request/axios";

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

import "./MovieRow.css";

export default function MovieRow({
  title,
  fetchURL,
  isLargeRow,
  isInsideHome,
  mobileView,
}) {
  const [movies, setMovies] = useState([]);
  const [showArrowLeft, setShowArrowLeft] = useState(false);

  const movRef = useRef(null);

  useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get(fetchURL);
      setMovies(res.data.results);
    };
    getApiData();
  }, [fetchURL]);

  const scroll = (offset) => {
    movRef.current.scrollLeft += offset;
  };

  return (
    <div
      className={`app__movierow ${isInsideHome && "app__movierow-homepage"} ${
        mobileView && "display__toprow"
      }`}
    >
      <h2 className="headtext__opensans row__title">{title}</h2>

      <div className="app__movierow-content" ref={movRef}>
        <div className="app__movierow-imageslist">
          {movies.map((movie) => {
            return (
              <img
                onClick={() => console.log("clicked")}
                className={`app__movierow-image ${
                  isLargeRow && "large__image"
                }`}
                key={movie.id}
                src={`${basicImgUrlPath}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt="movie img"
              />
            );
          })}
        </div>
        {showArrowLeft && (
          <AiOutlineLeft
            color="#FFF"
            fontSize={32}
            className="arrow__left"
            onClick={() => scroll(-400)}
          />
        )}
        <AiOutlineRight
          color="#FFF"
          fontSize={32}
          className="arrow__right"
          onClick={() => {
            setShowArrowLeft(true);
            scroll(400);
          }}
        />
      </div>
    </div>
  );
}
