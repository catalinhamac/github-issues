import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
});

export const getIssues = (queryParams = ''): Promise<unknown> =>
  octokit.request(`GET /issues?${queryParams}`);
