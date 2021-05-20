import { useDispatch } from 'react-redux';

import { getIssuesThunk } from '../store/issues/issues-thunks';

interface ReturnedProps {
  handleIssueDispatch: (queryParams: string) => void;
}

export const useIssueDispatch = (): ReturnedProps => {
  const dispatch = useDispatch();

  const handleIssueDispatch = (queryParams: string) => {
    dispatch(getIssuesThunk(queryParams));
  };

  return { handleIssueDispatch };
};
