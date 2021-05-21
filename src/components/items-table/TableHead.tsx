import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { TableHead as MuiTableHead, TableHeadProps } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CheckIcon from '@material-ui/icons/Check';
import clsx from 'clsx';

import { PriorityIcon } from './PriorityIcon';
import { AppRoute } from '../../config/route-config';
import { useTable } from '../useTable';

import styles from './TableHead.module.scss';

interface LinkProps {
  to: string;
  className: string;
  hasItems: number | undefined;
  children: ReactNode;
}

export const TableHead = (props: TableHeadProps): JSX.Element => {
  const { pathname } = useLocation();
  const {
    openIssues,
    closedIssues,
    isActiveOpenRoute,
    isActiveClosedRoute,
  } = useTable(pathname);

  const openNo = openIssues?.length;
  const closedNo = closedIssues?.length;

  const links = [
    {
      to: AppRoute.Open,
      className: clsx({
        [styles.cellItem]: true,
        [styles.light]: isActiveOpenRoute,
      }),
      hasItems: openNo,
      children: (
        <>
          <PriorityIcon className={styles.priorityIcon} /> {openNo} Open
        </>
      ),
    },
    {
      to: AppRoute.Closed,
      className: clsx({
        [styles.cellItem]: true,
        [styles.light]: isActiveClosedRoute,
      }),
      hasItems: closedNo,
      children: (
        <>
          <CheckIcon fontSize="small" className={styles.priorityIcon} />{' '}
          {closedNo} Closed
        </>
      ),
    },
  ];

  return (
    <MuiTableHead {...props} className={styles.tableHead}>
      <TableRow>
        <TableCell>
          <div className={styles.cell}>
            {links.map(
              (
                { to, className, hasItems, children }: LinkProps,
                index: number
              ) =>
                hasItems ? (
                  <Link key={index} to={to} className={className}>
                    {children}
                  </Link>
                ) : (
                  <span key={index} className={styles.cellItem}>
                    No `${to === AppRoute.Open ? 'open' : 'closed'} issues
                  </span>
                )
            )}
          </div>
        </TableCell>
      </TableRow>
    </MuiTableHead>
  );
};
