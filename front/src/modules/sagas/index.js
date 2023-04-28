import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { userSaga } from './user';
import { usersSaga } from './users';
import { educationSaga } from './education';

function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(usersSaga),
    fork(educationSaga),
  ]);
}

export default rootSaga;
