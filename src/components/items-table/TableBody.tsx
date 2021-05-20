import React from 'react';
import { TableBody as MuiTableBody } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { Issue } from '../../domain/Issue';

import styles from './TableBody.module.scss';
import { TableBodyCellContent } from './TableBodyCellContent';

interface Props {
  rows: Issue[];
  rowsPerPage: number;
  page: number;
}

export const TableBody = ({
  rows,
  rowsPerPage,
  page,
  ...rest
}: Props): JSX.Element => (
  <MuiTableBody {...rest} className={styles.tableBody}>
    {(rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows
    ).map((row: Issue) => (
      <TableRow key={row.id} hover className={styles.tableRow}>
        <TableCell component="th" scope="row">
          <TableBodyCellContent row={row} />
        </TableCell>
      </TableRow>
    ))}
  </MuiTableBody>
);
