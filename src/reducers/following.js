import * as types from '../constants/actionTypes';

const initalState = {
  isFetching: false,
  data: [],
  message: 'NOT_FETCHED',
};

const followingReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.FOLLOWING_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FOLLOWING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        message: 'FETCHED',
      };
    case types.FOLLOWING_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: 'CAN NOT FIND USER INFO',
      };
    default:
      return state;
  }
};

export default followingReducer;
