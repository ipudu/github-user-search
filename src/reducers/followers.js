import * as types from '../constants/actionTypes';

const initalState = {
  isFetching: false,
  data: [],
  message: 'NOT_FETCHED',
};

const followersReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.FOLLOWERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FOLLOWERS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        message: 'FETCHED',
      };
    case types.FOLLOWERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: 'CAN NOT FIND USER INFO',
      };
    default:
      return state;
  }
};

export default followersReducer;
