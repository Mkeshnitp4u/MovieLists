import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
loginStatus:false,
signUpStatus:false,
isLoader:false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoader:true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoader:false,
        loginStatus:true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoader:false,
        movieList: {},
        loginStatus:true
      };

    case types.SIGNUP:
      return {
        ...state,
        isLoader:true
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoader:false,
        signUpStatus:true
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isLoader:false,
        signUpStatus:false
      };

    
    default:
      return state;
  }
};
