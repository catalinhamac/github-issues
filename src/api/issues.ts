import { Octokit } from '@octokit/core';
import { IsuessData } from '../store/issues/issues-slice';

export const octokit = new Octokit({
  auth: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
});

export const getIssues = (queryParams = ''): Promise<IsuessData> =>
  octokit.request(`GET /issues?${queryParams}`);
