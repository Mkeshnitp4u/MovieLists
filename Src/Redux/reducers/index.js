import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import movieReducer from "./movieReducer";

const allReducers = combineReducers({
  loginReducer,
  movieReducer
});
export default allReducers;
