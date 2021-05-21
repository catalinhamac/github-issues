import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { ClosedIssues, testId } from '../ClosedIssues';
import { store } from '../../../store/store';

describe('ClosedIssues', () => {
  it('should render without errors', async () => {
    render(
      <Provider store={store}>
        <ClosedIssues />
      </Provider>
    );

    const component = screen.getByTestId(testId);
    expect(component).toBeDefined();
  });
});
