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
  api?: null | IsuessData;
};

interface Action {
  type: string;
  payload: any;
}

export const initialState: SliceState = {
  isLoading: false,
  error: null,
  api: null,
};

export const slice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setIssues: (state) => {
      state.isLoading = true;
    },
    setSuccessIssues: (state, { payload }: Action) => {
      state.isLoading = false;
      state.api = payload;
      state.error = null;
    },
    setErrorsIssues: (state, { payload }: Action) => {
      state.isLoading = false;
      state.api = null;
      state.error = payload;
    },
  },
});

export const { setIssues, setSuccessIssues, setErrorsIssues } = slice.actions;

export const selectIssuesApi = (
  state: RootState
): undefined | null | IsuessData => state.issues?.api;

export const selectIssues = (state: RootState): Issue[] | undefined =>
  state.issues?.api?.data;

export const selectIsLoading = (state: RootState): boolean =>
  state.issues.isLoading;

export const selectError = (state: RootState): GenericObject | null =>
  state.issues.error;

export default slice.reducer;
