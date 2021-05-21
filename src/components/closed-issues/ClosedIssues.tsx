import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ItemsTable } from '../items-table/ItemsTable';
import { BoxCenter } from '../BoxCenter';
import { getIssuesThunk } from '../../store/issues/issues-thunks';
import { useTable } from '../useTable';
import { State } from '../../domain/Issue';

export const testId = 'closedTestId';

export const ClosedIssues = (): JSX.Element => {
  const dispatch = useDispatch();

  const { closedIssues } = useTable();

  useEffect(() => {
    dispatch(getIssuesThunk(`state=${State.Closed}`));
  }, [dispatch]);

  return (
    <div data-testid={testId}>
      {closedIssues ? (
        <ItemsTable items={closedIssues} />
      ) : (
        <BoxCenter>
          <CircularProgress disableShrink />
          <h4>Loading closed issues</h4>
        </BoxCenter>
      )}
    </div>
  );
};
