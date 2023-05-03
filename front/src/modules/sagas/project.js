/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { all, fork, takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

import createType from 'lib/util/createType';
// import createSaga from 'lib/util/createSaga';
import createDummySaga from 'lib/util/createDummySaga';
import { generateDummyProject } from 'lib/util/generateDummy';

import * as projectAPI from '../../lib/api/user';

/* 1. 액션 타입 만들기 */
// Read
// prettier-ignore
export const [
  LOAD_PROJECT,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAILURE
] = createType('project/LOAD_PROJECT');

// Create
// prettier-ignore
export const [
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE
] = createType('project/ADD_PROJECT');

// Update
// prettier-ignore
export const [
  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
] = createType('project/UPDATE_PROJECT');

/* 2. 액션 객체 생성 함수 */
export const loadProject = createAction(LOAD_PROJECT, (id) => id);
export const addProject = createAction(ADD_PROJECT, (data) => data);
export const updateProject = createAction(UPDATE_PROJECT, (data) => data);

/* 3. 사가 함수 */
const loadProjectSaga = createDummySaga(
  LOAD_PROJECT,
  generateDummyProject,
  'LOAD',
);
const addProjectSaga = createDummySaga(ADD_PROJECT, null, 'ADD');
const updateProjectSaga = createDummySaga(UPDATE_PROJECT, null, 'UPDATE');

/* 4. 와치 함수 */
function* watchLoadProject() {
  yield takeLatest(LOAD_PROJECT, loadProjectSaga);
}

function* watchAddProject() {
  yield takeLatest(ADD_PROJECT, addProjectSaga);
}

function* watchUpdateProject() {
  yield takeLatest(UPDATE_PROJECT, updateProjectSaga);
}

export function* projectSaga() {
  yield all([
    fork(watchLoadProject),
    fork(watchAddProject),
    fork(watchUpdateProject),
  ]);
}
