import axios from "axios";

const API_KEY = "c3a057ebb4285a89137e6bef38fd3dd0";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMovieResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return axios
    .get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.data);
};
