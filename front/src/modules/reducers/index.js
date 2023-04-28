import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import auth from './auth';
import profile from './profile';
import users from './users';
import education from './education';

const rootReducer = combineReducers({
  loading,
  user,
  auth,
  profile,
  users,
  education,
});

export default rootReducer;
