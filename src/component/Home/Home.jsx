import React from "react";

import Navbar from "../Navbar/Navbar";
import MovieRow from "../../component/MovieRow/MovieRow";
import request from "../../Request/request";
import Footer from "../Footer/Footer";
import MoviePic from "../MoviePic/MoviePic";

export default function Home() {
  return (
    <>
      <Navbar />
      <MoviePic fetchURL={request.fetchPopularMov} />
      <MovieRow
        title="Popular on Netflix"
        fetchURL={request.fetchPopularMov}
        mobileView
      />
      <MovieRow title="What's trending" fetchURL={request.fetchTrending} />
      <MovieRow title="Top Rated" fetchURL={request.fetchTopRated} isLargeRow />
      <MovieRow title="Trending Today" fetchURL={request.fetchTrendingTod} />
      <MovieRow title="Popular TV Series" fetchURL={request.fetchPopularTV} />
      <Footer />
    </>
  );
}
