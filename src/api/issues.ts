import { Octokit } from '@octokit/core';

const personalAccessToken = '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';
const octokit = new Octokit({ auth: personalAccessToken });

export const getIssues = (queryParams = ''): Promise<unknown> =>
  octokit.request(`GET /issues?${queryParams}`);
