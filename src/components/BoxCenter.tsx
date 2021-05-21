import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';

interface Props {
  children: ReactNode;
}

export const BoxCenter = ({ children }: Props): JSX.Element => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100vh"
  >
    {children}
  </Box>
);
