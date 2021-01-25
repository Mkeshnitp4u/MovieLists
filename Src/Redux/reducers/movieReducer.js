import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
movieList:"MJJKK",
popularMovieList:{},
topRatedMovieList:{},
isLoader:false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.MOVIE_LIST:
      return {
        ...state,
        isLoader:true
      };
    case types.MOVIE_LIST_SUCCESS:
      return {
        ...state,
        isLoader:false,
        movieList: action.payload,
      };
    case types.MOVIE_LIST_FAILURE:
      return {
        ...state,
        isLoader:false,
        movieList: {},
      };

    case types.FETCH_POPULAR_MOVIE:
      return {
        ...state,
        isLoader:true
      };
    case types.FETCH_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        isLoader:false,
        popularMovieList:action.payload
      };
    case types.FETCH_POPULAR_MOVIE_FAILURE:
      return {
        ...state,
        isLoader:false,
        popularMovieList:{}
      };

    case types.TOP_RATED_MOVIE_LIST:
      return {
        ...state,
        isLoader:true
      };
    case types.TOP_RATED_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        isLoader:false,
        topRatedMovieList:action.payload
      };
    case types.TOP_RATED_MOVIE_LIST_FAILURE:
      return {
        ...state,
        isLoader:false,
        topRatedMovieList:{}
      };
    default:
      return state;
  }
};
