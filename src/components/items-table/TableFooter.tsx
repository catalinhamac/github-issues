import React, { MouseEvent, ChangeEvent } from 'react';
import { TableFooter as MuiTableFooter } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import { Issue } from '../../domain/Issue';
import { PaginationActions } from './PaginationActions';

interface Props {
  rows: Issue[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const TableFooter = (props: Props): JSX.Element => {
  const {
    rows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;

  return (
    <MuiTableFooter>
      <TableRow>
        <TablePagination
          labelRowsPerPage=""
          rowsPerPageOptions={[0]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={PaginationActions}
        />
      </TableRow>
    </MuiTableFooter>
  );
};
