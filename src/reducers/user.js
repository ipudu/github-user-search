import * as types from '../constants/actionTypes';

const initalState = {
  isFetching: false,
  data: {},
  message: 'NOT_FETCHED',
};

const userReducer = (state = initalState, action) => {
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
        data: action.payload,
        message: 'FETCHED',
      };
    case types.USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: 'CAN NOT FIND USER INFO',
      };
    default:
      return state;
  }
};

export default userReducer;
