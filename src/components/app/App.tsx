import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import { ItemsTable } from '../items-table/ItemsTable';
import { BoxCenter } from '../BoxCenter';
import { getIssuesThunk } from '../../store/issues/issues-thunks';
import { selectIssues, selectError } from '../../store/issues/issues-slice';

export const testId = 'appTestId';

export const App = (): any => {
  const dispatch = useDispatch();
  const issues = useSelector(selectIssues, shallowEqual);
  const error = useSelector(selectError, shallowEqual);

  useEffect(() => {
    dispatch(getIssuesThunk('state=all'));
  }, [dispatch]);

  if (error) {
    return (
      <BoxCenter>
        <Alert severity="error">{error}</Alert>
      </BoxCenter>
    );
  }

  return issues ? (
    <Container data-testid={testId}>
      <h1>GitHub issues</h1>
      {issues.length ? (
        <ItemsTable items={issues} />
      ) : (
        <h4>You have no issues</h4>
      )}
    </Container>
  ) : (
    <BoxCenter>
      <CircularProgress disableShrink />
      <h4>Loading issues</h4>
    </BoxCenter>
  );
};
