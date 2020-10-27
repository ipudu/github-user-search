import * as types from '../constants/actionTypes';
import api from '../api';

export const fetchFollowers = (userId) => {
  return (dispatch) => {
    dispatch({ type: types.FOLLOWERS_REQUEST });
    api
      .get(userId + '/followers')
      .then((res) => {
        dispatch({ type: types.FOLLOWERS_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.FOLLOWERS_FAILURE });
      });
  };
};
