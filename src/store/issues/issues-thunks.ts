import {
  setIssues,
  setSuccessAllIssues,
  setSuccessOpenIssues,
  setSuccessClosedIssues,
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
    .then((result: IsuessData) => {
      if (queryParams.includes('open')) {
        return dispatch(setSuccessOpenIssues(result));
      }

      if (queryParams.includes('closed')) {
        return dispatch(setSuccessClosedIssues(result));
      }

      return dispatch(setSuccessAllIssues(result));
    })
    .catch((e) => dispatch(setErrorsIssues(e.message)));
};
