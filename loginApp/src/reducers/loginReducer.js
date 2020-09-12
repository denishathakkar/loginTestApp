import {LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/types';
const INITIAL_STATE = {
  loginSuccessValue: false,
  duringActions: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log('loginreducer', action, state);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccessValue: true,
        user: action.user,
        duringActions: action.type,
      };
    case LOGIN_FAIL:
      return {...state, loginSuccessValue: false, duringActions: action.type};
  }
  return state;
};
