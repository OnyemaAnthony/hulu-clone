const API_KEY ='671ac3911cea2edca1a92e30ebf5eaf0';



export default {
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movies?api_key=${API_KEY}$with_genres=35`,
    fetchHorrorMovies:`/discover/movies?api_key=${API_KEY}$with_genres=27`,
    fetchRomanceMovies:`/discover/movies?api_key=${API_KEY}$with_genres=10749`,
    fetchMystery:`/discover/movies?api_key=${API_KEY}$with_genres=9648`,
    fetchSciFi:`/discover/movies?api_key=${API_KEY}$with_genres=878`,
    fetchWestern:`/discover/movies?api_key=${API_KEY}$with_genres=37`,
    fetchAnimation:`/discover/movies?api_key=${API_KEY}$with_genres=16`,
    fetchTV:`/discover/movies?api_key=${API_KEY}$with_genres=16`,
};