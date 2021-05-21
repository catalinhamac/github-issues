import {
  setIssues,
  setSuccessIssues,
  setErrorsIssues,
  IsuessData,
} from './issues-slice';
import { AppDispatch } from '../store';
import { getIssues } from '../../api/issues';

export const getIssuesThunk = (queryParams: string) => async (
  dispatch: AppDispatch
): Promise<IsuessData | void> => {
  dispatch(setIssues());

  getIssues(queryParams)
    .then((result: any) => dispatch(setSuccessIssues(result)))
    .catch((e) => dispatch(setErrorsIssues(e.message)));
};
