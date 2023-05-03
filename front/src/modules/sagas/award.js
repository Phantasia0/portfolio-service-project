import { all, fork, takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

import createType from 'lib/util/createType';
// import createSaga from 'lib/util/createSaga';
import createDummySaga from 'lib/util/createDummySaga';
import { generateDummyAward } from 'lib/util/generateDummy';

import * as awardAPI from '../../lib/api/user';

/* 1. 액션 타입 만들기 */
// Read
// prettier-ignore
export const [
  LOAD_AWARD,
  LOAD_AWARD_SUCCESS,
  LOAD_AWARD_FAILURE
] = createType('award/LOAD_AWARD');

// Create
// prettier-ignore
export const [
  ADD_AWARD,
  ADD_AWARD_SUCCESS,
  ADD_AWARD_FAILURE
] = createType('award/ADD_AWARD');

// Update
// prettier-ignore
export const [
  UPDATE_AWARD,
  UPDATE_AWARD_SUCCESS,
  UPDATE_AWARD_FAILURE,
] = createType('award/UPDATE_AWARD');

/* 2. 액션 객체 생성 함수 */
export const loadAward = createAction(LOAD_AWARD, (id) => id);
export const addAward = createAction(ADD_AWARD, (data) => data);
export const updateAward = createAction(UPDATE_AWARD, (data) => data);

/* 3. 사가 함수 */
const loadAwardSaga = createDummySaga(LOAD_AWARD, generateDummyAward, 'LOAD');
const addAwardSaga = createDummySaga(ADD_AWARD, null, 'ADD');
const updateAwardSaga = createDummySaga(UPDATE_AWARD, null, 'UPDATE');

/* 4. 와치 함수 */
function* watchLoadAward() {
  yield takeLatest(LOAD_AWARD, loadAwardSaga);
}

function* watchAddAward() {
  yield takeLatest(ADD_AWARD, addAwardSaga);
}

function* watchUpdateAward() {
  yield takeLatest(UPDATE_AWARD, updateAwardSaga);
}

export function* awardSaga() {
  yield all([
    fork(watchLoadAward),
    fork(watchAddAward),
    fork(watchUpdateAward),
  ]);
}
