import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import { ItemsTable } from '../items-table/ItemsTable';
import { getIssuesThunk } from '../../store/issues/issues-thunks';
import { selectIssuesData } from '../../store/issues/issues-slice';
import { Issue } from '../../domain/Issue';

export const testId = 'appTestId';

export const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const issues = useSelector(selectIssuesData, shallowEqual) as Issue[];

  useEffect(() => {
    dispatch(getIssuesThunk('state=all'));
  }, [dispatch]);

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress disableShrink />
      <h4>Loading issues</h4>
    </Box>
  );
};
