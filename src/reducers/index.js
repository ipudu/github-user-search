import { combineReducers } from 'redux';

import userReducer from './user';
import followersReducer from './followers';
import followingReducer from './following';

const rootReducer = combineReducers({
  user: userReducer,
  followers: followersReducer,
  following: followingReducer,
});

export default rootReducer;
