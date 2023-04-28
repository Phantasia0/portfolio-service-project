import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { userSaga } from './user';
import { usersSaga } from './users';

function* rootSaga() {
  yield all([fork(authSaga), fork(userSaga), fork(usersSaga)]);
}

export default rootSaga;
