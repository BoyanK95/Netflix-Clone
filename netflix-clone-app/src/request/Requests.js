const API_KEY = "089b617253e47ebe55e8aeef2a65814f";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests
