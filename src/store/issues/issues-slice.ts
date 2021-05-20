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
  errors: GenericObject | null;
  data?: null | IsuessData;
};

interface Action {
  type: string;
  payload: any;
}

export const initialState: SliceState = {
  isLoading: false,
  errors: null,
  data: null,
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
      state.data = payload;
      state.errors = initialState.errors;
    },
    setErrorsIssues: (state, { payload }: Action) => {
      state.isLoading = false;
      state.data = null;
      state.errors = payload;
    },
  },
});

export const { setIssues, setSuccessIssues, setErrorsIssues } = slice.actions;

export const selectIssues = (state: RootState): SliceState => state.issues;

export const selectIssuesData = (
  state: RootState
): IsuessData | null | undefined => selectIssues(state)?.data;

export const selectIssuesFromData = (state: RootState): Issue[] | undefined =>
  selectIssuesData(state)?.data;

export const selectIsLoading = (state: RootState): boolean =>
  selectIssues(state).isLoading;

export const selectErrors = (
  state: RootState
): GenericObject | null | undefined => selectIssues(state).errors;

export default slice.reducer;
