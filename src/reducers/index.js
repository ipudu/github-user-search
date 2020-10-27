import { combineReducers } from 'redux';

import userReducer from './user';
import followingReducer from './following';

const rootReducer = combineReducers({
  user: userReducer,
  following: followingReducer,
});

export default rootReducer;
