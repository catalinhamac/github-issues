import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { App, testId } from '../App';
import {
  ItemsTable,
  testId as itemsTableTestId,
} from '../../items-table/ItemsTable';
import { Issue } from '../../../domain/Issue';
import { store } from '../../../store/store';
import { setSuccessIssues } from '../../../store/issues/issues-slice';

export const mockIssue: Issue = {
  created_at: '10.02.2021',
  state: 'open',
  title: 'title',
  updated_at: '10.02.2021',
  number: 1,
  type: 'open',
  id: 1,
  labels: [
    {
      id: 1,
      color: 'red',
      name: 'test',
    },
  ],
  repository: {
    name: 'test',
  },
  user: {
    login: 'test',
    html_url: 'http://',
  },
};

beforeEach(() => {
  store.dispatch(setSuccessIssues([mockIssue]));
});

describe('App', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const component = screen.getByTestId(testId);
    expect(component).toBeDefined();
  });

  it('should render ItemsTable', () => {
    render(
      <Provider store={store}>
        <ItemsTable items={[mockIssue]} />
      </Provider>
    );

    const component = screen.getByTestId(itemsTableTestId);
    expect(component).toBeDefined();
  });
});
