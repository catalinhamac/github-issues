import { setIssues, setSuccessIssues, setErrorsIssues } from './issues-slice';
import { AppDispatch } from '../store';
import { getIssues } from '../../api/issues';

export const getIssuesThunk = (queryParams: string) => async (
  dispatch: AppDispatch
): Promise<void> => {
  let result: any;
  try {
    dispatch(setIssues());

    result = await getIssues(queryParams);
  } catch (e) {
    if (e.response && e.response.data) {
      const { errors } = e.response.data || {};
      dispatch(setErrorsIssues(errors));
      return Promise.reject(errors);
    }
  }

  dispatch(setSuccessIssues(result.data));
  return Promise.resolve(result);
};
