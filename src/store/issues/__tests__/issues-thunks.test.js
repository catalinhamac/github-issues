import { getIssuesThunk } from '../../issues/issues-thunks';
import { setSuccessAllIssues } from '../../issues/issues-slice';
import * as issuesApi from '../../../api/issues';

const mockIssues = { a: 1 };

describe('issues-thunks', () => {
  it('should set issues', async () => {
    jest.spyOn(issuesApi, 'getIssues').mockResolvedValue(mockIssues);

    const dispatch = jest.fn();

    await getIssuesThunk('value')(dispatch);

    expect(dispatch.mock.calls.length).toEqual(2);
    expect(dispatch.mock.calls[1][0]).toEqual(setSuccessAllIssues(mockIssues));
  });
});
