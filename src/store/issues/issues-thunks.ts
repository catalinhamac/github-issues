import { setIssues, setSuccessIssues, setErrorsIssues } from './issues-slice';
import { AppDispatch } from '../store';
import { getIssues } from '../../api/issues';

export const getIssuesThunk = (queryParams: string) => async (
  dispatch: AppDispatch
): Promise<void> => {
  try {
    dispatch(setIssues());

    const result: any = await getIssues(queryParams);

    dispatch(setSuccessIssues(result));
    return Promise.resolve(result);
  } catch (e) {
    dispatch(setErrorsIssues(e));
    return Promise.reject(e);
  }
};
