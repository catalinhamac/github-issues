import { getIssuesThunk } from '../../issues/issues-thunks';
import { setIssues, setSuccessIssues } from '../../issues/issues-slice';
import * as issuesApi from '../../../api/issues';

const mockIssues = { a: 1 };

describe('issues-thunks', () => {
  it('should set issues', async () => {
    jest.spyOn(issuesApi, 'getIssues').mockResolvedValue(mockIssues);

    const dispatch = jest.fn();

    await getIssuesThunk('value')(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(setIssues());
    expect(dispatch.mock.calls.length).toEqual(2);
    expect(dispatch.mock.calls[1][0]).toEqual(setSuccessIssues(mockIssues));
  });
});
