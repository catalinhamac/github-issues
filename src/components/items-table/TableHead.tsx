import React from 'react';
import { TableHead as MuiTableHead } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CheckIcon from '@material-ui/icons/Check';
import clsx from 'clsx';

import { Issue, State } from '../../domain/Issue';
import { PriorityIcon } from './PriorityIcon';

import styles from './TableHead.module.scss';

interface Props {
  rows: Issue[];
}

export const TableHead = ({ rows, ...rest }: Props): JSX.Element => {
  const closedItems = rows.filter((n) => n.state === State.closed);
  const openItems = rows.filter((n) => n.state === State.open);

  return (
    <MuiTableHead {...rest} className={styles.tableHead}>
      <TableRow>
        <TableCell>
          <div className={styles.cell}>
            <span className={styles.cellItem}>
              <PriorityIcon className={styles.priorityIcon} />{' '}
              {openItems.length} Open
            </span>
            <span className={clsx(styles.cellItem, styles.light)}>
              <CheckIcon fontSize="inherit" className={styles.checkIcon} />
              {closedItems.length} Closed
            </span>
          </div>
        </TableCell>
      </TableRow>
    </MuiTableHead>
  );
};
