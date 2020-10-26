import * as types from '../constants/actionTypes';

const initalState = {
  isFetching: false,
  userData: {},
  isFetchingFollowing: false,
  followingData: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
      };
    case types.USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
      };
    case types.FOLLOWING_REQUEST:
      return {
        ...state,
        isFetchingFollowing: true,
      };
    case types.FOLLOWING_SUCCESS:
      console.log('aasd');
      return {
        ...state,
        isFetchingFollowing: false,
        followingData: action.payload,
      };
    case types.FOLLOWING_FAILURE:
      return {
        ...state,
        isFetchingFollowing: false,
        followingData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
