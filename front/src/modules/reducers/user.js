/* eslint-disable no-shadow */
import { createAction, handleActions } from 'redux-actions';
import {
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
} from 'modules/sagas/auth';

const LOGOUT = 'user/LOGOUT';

export const logout = createAction(LOGOUT);

const initialState = {
  user: null,
  error: null,
};

const user = handleActions(
  {
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
      error: null,
    }),
    [GET_CURRENT_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      error: null,
    }),
    [GET_CURRENT_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default user;
