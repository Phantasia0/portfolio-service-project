import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import auth from './auth';
import profile from './profile';
import users from './users';
import education from './education';
import award from './award';

const rootReducer = combineReducers({
  loading,
  user,
  auth,
  profile,
  users,
  education,
  award,
});

export default rootReducer;
