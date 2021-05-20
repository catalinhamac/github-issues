import React from 'react';
import { render, screen } from '@testing-library/react';

import { PriorityIcon, testId } from '../PriorityIcon';

describe('PriorityIcon', () => {
  it('should render without errors', async () => {
    render(<PriorityIcon state="open" />);

    const component = screen.getByTestId(testId);
    expect(component).toBeDefined();
  });
});
