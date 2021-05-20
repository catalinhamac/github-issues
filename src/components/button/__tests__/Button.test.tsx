import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button, testId } from '../Button';

describe('Button', () => {
  it('should render without errors', async () => {
    render(
      <Button>
        <></>
      </Button>
    );

    const component = screen.getByTestId(testId);
    expect(component).toBeDefined();
  });
});
