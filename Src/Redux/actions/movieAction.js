import * as type from './actionTypes';


export const fetchMovieList = () => ({
  type: type.MOVIE_LIST
});

export const fetchTopRatedMovie=()=>(
  {
    type: type.TOP_RATED_MOVIE_LIST
  }
);


export const fetchPopularMovie=()=>(
  {
    type: type.FETCH_POPULAR_MOVIE
  }
);


