import React from 'react';
import { useDispatch } from 'react-redux';
import { Chip as MuiChip } from '@material-ui/core';

import { Label, LabelColor } from '../../domain/Issue';
import { getIssuesThunk } from '../../store/issues/issues-thunks';

import styles from './Chip.module.scss';

interface Props {
  label: Label;
}

export const Chip = ({ label, ...rest }: Props): JSX.Element => {
  const { name, color } = label;

  const dispatch = useDispatch();

  const handleClick = () => () => {
    dispatch(getIssuesThunk(`labels=${name}`));
  };

  const textColor =
    color === LabelColor.red || color === LabelColor.blue ? '#fff' : '#000';

  return (
    <MuiChip
      label={name}
      style={{ backgroundColor: `#${color}`, color: textColor }}
      size="small"
      className={styles.chip}
      onClick={handleClick()}
      {...rest}
    />
  );
};
