import React, { ReactElement } from 'react';

export const testId = 'buttonTestId';

interface Props {
  handleClick?: () => void;
  disabled?: boolean;
  children: ReactElement | string;
}

export const Button = (props: Props): JSX.Element => {
  const { handleClick, children, ...rest } = props;

  return (
    <button data-testid={testId} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};
