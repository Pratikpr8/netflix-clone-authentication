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
  const [isLoading, setIsLoading] = useState(true);

  const movRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const getApiData = async () => {
      const res = await axios.get(fetchURL);
      setMovies(res.data.results);
      console.log(res.data.results);
      setIsLoading(false);
    };
    getApiData();
  }, [fetchURL]);

  const scroll = (offset) => {
    movRef.current.scrollLeft += offset;
  };

  return (
    <>
      {isLoading ? (
        <div className="isloading" />
      ) : (
        <div
          className={`app__movierow ${
            isInsideHome && "app__movierow-homepage"
          } ${mobileView && "display__toprow"}`}
        >
          <h2 className="headtext__opensans row__title">{title}</h2>

          <div className="app__movierow-content" ref={movRef}>
            <div className="app__movierow-imageslist">
              {movies.map((movie) => {
                return (
                  <div
                    className={`app__movierow-movies ${
                      isLargeRow && "large__row"
                    }`}
                    key={movie.id}
                  >
                    <img
                      className={`app__movierow-image ${
                        isLargeRow && "large__image"
                      }`}
                      src={`${basicImgUrlPath}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt="movie img"
                    />
                    <div className="app__movierow-overlay">
                      <p>{movie.title || movie.name}</p>
                    </div>
                  </div>
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
      )}
    </>
  );
}
