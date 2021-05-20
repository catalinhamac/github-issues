import React from 'react';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { SvgIconProps } from '@material-ui/core';
import clsx from 'clsx';

import { State } from '../../domain/Issue';

import styles from './PriorityIcon.module.scss';

export const testId = 'priorityIconTestId';

interface OwnProps {
  state?: string;
  fontSize?: string;
  isOutlined?: boolean;
  className?: string;
}

type Props = SvgIconProps & OwnProps;

export const PriorityIcon = (props: Props): JSX.Element => {
  const { state, isOutlined = true, className = '', ...rest } = props;
  const isOpen = state === State.open;

  return (
    <PriorityHighIcon
      data-testid={testId}
      className={clsx({
        [styles.success]: isOpen,
        [styles.danger]: !isOpen,
        [styles.outlined]: isOutlined,
        [className]: true,
      })}
      fontSize="inherit"
      {...rest}
    />
  );
};
