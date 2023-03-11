import React, { useEffect, useState } from "react";
import axios from "../../Request/axios";
import request from "../../Request/request";
import MovieRow from "../../component/MovieRow/MovieRow";
import { basicImgUrlPath } from "../../constants/urlconstants";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";

import "./MoviePic.css";

export default function MoviePic({ fetchURL }) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await axios.get(fetchURL);
      const data = res.data.results;
      // console.log(data);
      const randomObj = data[Math.floor(Math.random() * data.length)];
      setMovie(randomObj); // console.log(movie);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="isloading" />
      ) : (
        <div className="app__moviepic">
          <div className="app__moviepic-gradient" />
          <img
            src={`${basicImgUrlPath}${movie.backdrop_path}`}
            alt="home pic"
          />
          <div className="app__moviepic-content">
            <div className="app__moviepic-content_info">
              <h1 className="headtext__opensans movie-title">
                {movie.original_title}
              </h1>
              <p className="p__opensans movie-info">{movie.overview}</p>
            </div>
            <div className="app__moviepic-content_buttons flex__center">
              <button className="button flex__center button-play">
                <BsFillPlayFill
                  className="mr-1"
                  color="#141414"
                  fontSize={20}
                />
                Play
              </button>
              <button className="button flex__center button-moreinfo">
                <BsInfoCircle className="mr-1" color="#FFF" fontSize={20} />{" "}
                More Info
              </button>
            </div>
          </div>
          <div className="app__moviepic-movierow">
            <MovieRow
              title="Popular on Netflix"
              fetchURL={request.fetchPopularMov}
              isInsideHome
            />
          </div>
        </div>
      )}
    </>
  );
}
