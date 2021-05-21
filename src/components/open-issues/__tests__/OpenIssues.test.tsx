import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { OpenIssues, testId } from '../OpenIssues';
import { store } from '../../../store/store';

describe('OpenIssues', () => {
  it('should render without errors', async () => {
    render(
      <Provider store={store}>
        <OpenIssues />
      </Provider>
    );

    const component = screen.getByTestId(testId);
    expect(component).toBeDefined();
  });
});
