import { put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";

function* loginSaga() {
    yield takeLatest(types.MOVIE_LIST, getLogin);

  }

const getLoginApi = action => {
    console.log("loginApi",action)
//   return MovieAPI.get(
//     `${API_URL}${config.endpoint.emiValue}`,
//     null,
//     null,
//   );
};



function* getLogin(action) {
    try {
      const response = yield call(getLoginApi, action.payload);
      yield put({
        type: types.LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      yield put({
        type: types.LOGIN_FAILURE,
        payload: error,
      });
    }
  }

export default loginSaga;