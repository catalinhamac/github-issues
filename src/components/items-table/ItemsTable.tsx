import React, { useEffect, MouseEvent, ChangeEvent } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { Issue } from '../../domain/Issue';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';

export const testId = 'itemsTableTestId';

interface Props {
  items: Issue[];
}

export const ItemsTable = (props: Props): JSX.Element => {
  const { items: rows } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  useEffect(() => {
    if (rows.length < rowsPerPage && page > 0) {
      setPage(0);
    }
  }, [rows.length, rowsPerPage, page]);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div data-testid={testId}>
      {rows ? (
        <TableContainer component={Paper}>
          <Table aria-label="items table">
            <TableHead />
            <TableBody rows={rows} rowsPerPage={rowsPerPage} page={page} />
            <TableFooter
              rows={rows}
              rowsPerPage={rowsPerPage}
              page={page}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
};
