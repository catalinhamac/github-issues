import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

import { Routes } from '../routes/Routes';
import { BoxCenter } from '../BoxCenter';
import { getIssuesThunk } from '../../store/issues/issues-thunks';
import { selectError } from '../../store/issues/issues-slice';
import { State } from '../../domain/Issue';

export const testId = 'appTestId';

export const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const error = useSelector(selectError, shallowEqual);

  useEffect(() => {
    dispatch(getIssuesThunk(`state=${State.All}`));
    dispatch(getIssuesThunk(`state=${State.Open}`));
    dispatch(getIssuesThunk(`state=${State.Closed}`));
  }, [dispatch]);

  if (error) {
    return (
      <BoxCenter>
        <Alert severity="error">{error}</Alert>
      </BoxCenter>
    );
  }

  return (
    <Container data-testid={testId}>
      <h1>GitHub issues</h1>
      <Routes />
    </Container>
  );
};
