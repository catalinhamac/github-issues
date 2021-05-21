import { createSlice } from '@reduxjs/toolkit';
import { Issue } from '../../domain/Issue';
import { GenericObject } from '../../utils/GenericObject';
import { RootState } from '../store';

export interface IsuessData {
  status: number;
  url: string;
  headers: any;
  data: Issue[];
}

type SliceState = {
  isLoading: boolean;
  error: GenericObject | null;
  all?: null | IsuessData;
  open?: null | IsuessData;
  closed?: null | IsuessData;
};

interface Action {
  type: string;
  payload: any;
}

export const initialState: SliceState = {
  isLoading: false,
  error: null,
  all: null,
  open: null,
  closed: null,
};

export const slice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setIssues: (state) => {
      state.isLoading = true;
    },
    setSuccessAllIssues: (state, { payload }: Action) => {
      state.isLoading = false;
      state.all = payload;
      state.error = null;
    },
    setSuccessOpenIssues: (state, { payload }: Action) => {
      state.isLoading = false;
      state.open = payload;
      state.error = null;
    },
    setSuccessClosedIssues: (state, { payload }: Action) => {
      state.isLoading = false;
      state.closed = payload;
      state.error = null;
    },
    setErrorsIssues: (state, { payload }: Action) => {
      state.isLoading = false;
      state.all = null;
      state.error = payload;
    },
  },
});

export const {
  setIssues,
  setSuccessAllIssues,
  setSuccessOpenIssues,
  setSuccessClosedIssues,
  setErrorsIssues,
} = slice.actions;

export const selectAllIssues = (
  state: RootState
): undefined | null | IsuessData => state?.issues?.all;

export const selectOpenIssues = (state: RootState): undefined | Issue[] =>
  state.issues?.open?.data;

export const selectClosedIssues = (state: RootState): undefined | Issue[] =>
  state.issues?.closed?.data;

export const selectIssues = (state: RootState): Issue[] | undefined =>
  state.issues?.all?.data;

export const selectIsLoading = (state: RootState): boolean =>
  state.issues.isLoading;

export const selectError = (state: RootState): GenericObject | null =>
  state.issues.error;

export default slice.reducer;
