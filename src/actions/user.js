import * as types from '../constants/actionTypes';
import api from '../api';

export const fetchUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: types.USER_REQUEST });
    api
      .get(userId)
      .then((res) => {
        dispatch({ type: types.USER_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.USER_FAILURE });
      });
  };
};
