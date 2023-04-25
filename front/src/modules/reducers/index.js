import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import auth from './auth';
import profile from './profile';
import users from './users';

const rootReducer = combineReducers({ loading, user, auth, profile, users });

export default rootReducer;
