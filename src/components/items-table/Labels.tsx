import React from 'react';

import { Label } from '../../domain/Issue';
import { Chip } from './Chip';

export const testId = 'labelsTestiD';

interface Props {
  labels: Label[];
}

export const Labels = ({ labels }: Props): JSX.Element => {
  return (
    <span data-testid={testId}>
      {labels.length
        ? labels.map((label: Label) => <Chip key={label.id} label={label} />)
        : null}
    </span>
  );
};
