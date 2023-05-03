import { handleActions } from 'redux-actions';
import { produce } from 'immer';

import {
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAILURE,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
} from 'modules/sagas/project';

const initialState = {
  datas: [],
  loadProjectError: null,
  addProjectError: null,
  updateProjectError: null,
};

const project = handleActions(
  {
    [LOAD_PROJECT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.datas = draft.datas.concat(action.payload);
      }),
    [LOAD_PROJECT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.loadProjectError = action.payload;
      }),
    [ADD_PROJECT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.datas.push(action.payload);
      }),
    [ADD_PROJECT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.addProjectError = action.payload;
      }),
    [UPDATE_PROJECT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const data = draft.datas.find(
          (value) => value.id === action.payload.id,
        );
        data.projectName = action.payload.projectName;
        data.projectLink = action.payload.projectLink;
        data.introduction = action.payload.introduction;
        data.startDate = action.payload.startDate;
        data.myRole = action.payload.myRole;
        data.detail = action.payload.detail;
      }),
    [UPDATE_PROJECT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.updateProjectError = action.payload;
      }),
  },
  initialState,
);

export default project;