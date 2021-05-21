import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ItemsTable } from '../items-table/ItemsTable';
import { BoxCenter } from '../BoxCenter';
import { getIssuesThunk } from '../../store/issues/issues-thunks';
import { useTable } from '../useTable';
import { State } from '../../domain/Issue';

export const testId = 'openIssuesTestId';

export const OpenIssues = (): JSX.Element => {
  const dispatch = useDispatch();

  const { openIssues } = useTable();

  useEffect(() => {
    dispatch(getIssuesThunk(`state=${State.Open}`));
  }, [dispatch]);

  return (
    <div data-testid={testId}>
      {openIssues ? (
        <ItemsTable items={openIssues} />
      ) : (
        <BoxCenter>
          <CircularProgress disableShrink />
          <h4>Loading open issues</h4>
        </BoxCenter>
      )}
    </div>
  );
};
