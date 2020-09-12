import {LOGIN_SUCCESS, LOGIN_FAIL} from './types';

export const loginActions = (data) => {
  console.log('loginAction', data);
  return (dispatch) => {
    if (data.username == 'admin' && data.password == '123') {
      dispatch({
        type: LOGIN_SUCCESS,
        user: data.username,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
};
