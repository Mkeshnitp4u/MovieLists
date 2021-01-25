import { fork, all } from "redux-saga/effects";
import loginSaga from './loginSaga';
import movieListSaga from './movielistSaga'
export default function* rootSaga() {  yield all([fork(loginSaga), fork(movieListSaga)]);
}
