import React, { AnchorHTMLAttributes } from 'react';
import Box from '@material-ui/core/Box';
import moment from 'moment';

import { Issue, State } from '../../domain/Issue';
import { PriorityIcon } from './PriorityIcon';
import { Labels } from './Labels';

import styles from './TableBodyCellContent.module.scss';

export const testId = 'tableBodyCellContentTestId';

interface Props {
  row: Issue;
}

type LinkProps = AnchorHTMLAttributes<any> & {
  className?: string;
  text: string;
};

export const TableBodyCellContent = ({ row }: Props): JSX.Element => {
  const {
    title,
    state,
    labels,
    number,
    created_at: createdAt,
    closed_at: closedAt,
    user,
    repository,
  } = row as Issue;

  const ActionMessage = () =>
    state === State.open ? (
      <>
        #{number} opened {moment(createdAt.toString(), 'YYYYMMDD').fromNow()} by{' '}
        <a href={user.html_url}>{user.login}</a>
      </>
    ) : (
      <>
        #{number} by {user.login} was closed{' '}
        {moment(closedAt.toString()).format('dddd')}
      </>
    );

  const links: LinkProps[] = [
    {
      className: styles.grey,
      href: `${user.html_url}/${repository.name}`,
      text: `${user.login}/${repository.name}`,
    },
    {
      href: `${user.html_url}/${repository.name}/issues/${number}`,
      text: title,
    },
  ];

  return (
    <div data-testid={testId} className={styles.content}>
      <PriorityIcon state={state} className={styles.priorityIcon} />
      <span>
        <Box className={styles.linkWrapper}>
          {links.map(
            ({ className = '', href, text }: LinkProps, index: number) => (
              <a key={index} className={className} href={href}>
                {text}
              </a>
            )
          )}
          <Labels labels={labels} />
        </Box>
        <h6 className={styles.info}>
          <ActionMessage />
        </h6>
      </span>
    </div>
  );
};
