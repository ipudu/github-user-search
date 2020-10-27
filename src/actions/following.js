import * as types from '../constants/actionTypes';
import api from '../api';

export const fetchFollowing = (userId) => {
  return (dispatch) => {
    dispatch({ type: types.FOLLOWING_REQUEST });
    api
      .get(userId + '/following')
      .then((res) => {
        dispatch({ type: types.FOLLOWING_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.FOLLOWING_FAILURE });
      });
  };
};
