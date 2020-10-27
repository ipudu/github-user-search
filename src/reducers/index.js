import * as types from '../constants/actionTypes';

const initalState = {
  isFetching: false,
  userData: {},
  followingData: [],
  isFetchingFollowing: false,
  userMessage: 'NOT_FETCHED',
  followingMessage: 'NOT_FETCHED',
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
        userMessage: 'FETCHED',
      };
    case types.USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        userMessage: 'CAN NOT FIND USER INFO',
      };
    case types.FOLLOWING_REQUEST:
      return {
        ...state,
        isFetchingFollowing: true,
      };
    case types.FOLLOWING_SUCCESS:
      return {
        ...state,
        isFetchingFollowing: false,
        followingData: action.payload,
        followingMessage: 'FETCHED',
      };
    case types.FOLLOWING_FAILURE:
      return {
        ...state,
        isFetchingFollowing: false,
        followingMessage: 'CAN NOT FIND USER INFO',
      };
    default:
      return state;
  }
};

export default reducer;
