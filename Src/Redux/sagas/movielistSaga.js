import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import MovieAPI from "../../NetworkUtility/api";
let API_KEY = "14c16d56f2647e61c2faef5355014969"
export const FETCH_POPULAR_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=`

function* movieListSaga() {
  yield takeLatest(types.MOVIE_LIST, getMovieList);
  // yield takeLatest(types.TOP_RATED_MOVIE_LIST, getTopRatedMovieList);
  // yield takeLatest(types.FETCH_POPULAR_MOVIE, fetchPopularMovieList);
}

const getMovieApi = action => {
    console.log("action",action)
  return MovieAPI.get(
    `${FETCH_POPULAR_MOVIE}`,
    null,
    null,
  );
};

function* getMovieList(action) {
  try {
    const response = yield call(getMovieApi, action.payload);

    console.log("daatatatata", response)
    yield put({
      type: types.MOVIE_LIST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.MOVIE_LIST_FAILURE,
      payload: error,
    });
  }
}

export default movieListSaga;