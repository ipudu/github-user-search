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
      .catch((err) => {
        dispatch({ type: types.USER_FAILURE, payload: err });
      });
  };
};

export const fetchFollowing = (userId) => {
  return (dispatch) => {
    dispatch({ type: types.FOLLOWING_REQUEST });
    api
      .get(userId + '/following')
      .then((res) => {
        dispatch({ type: types.FOLLOWING_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.FOLLOWING_FAILURE, payload: err });
      });
  };
};
