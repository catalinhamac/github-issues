import React, { ReactNode } from 'react';

export const testId = 'buttonTestId';

interface Props {
  handleClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = (props: Props): JSX.Element => {
  const { handleClick, children, ...rest } = props;

  return (
    <button data-testid={testId} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};
