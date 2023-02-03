const API_Key = process.env.REACT_APP_TMDB_API_KEY;

const request = {
  fetchPopularMov: `/movie/popular?api_key=${API_Key}&language=en-US&page=1`,

  fetchTrending: `/trending/movie/week?api_key=${API_Key}`,

  fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,

  fetchPopularTV: `/trending/tv/week?api_key=${API_Key}`,

  fetchTrendingTod: `/trending/movie/day?api_key=${API_Key}`,
};

export default request;
