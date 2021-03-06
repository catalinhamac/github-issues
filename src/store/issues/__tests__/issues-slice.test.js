import reducer, {
  initialState,
  setIssues,
  selectAllIssues,
  setSuccessAllIssues,
  setErrorsIssues,
  selectIsLoading,
  selectError,
  slice,
} from '../issues-slice';

describe('issues-slice', () => {
  it('setIssues', () => {
    const newState = reducer(initialState, setIssues());
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(true);
  });

  it('setSuccessIssues', () => {
    const payload = {
      data: [],
      errors: null,
      isLoading: false,
    };
    const newState = reducer(initialState, setSuccessAllIssues(payload));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectAllIssues(appState)).toEqual({
      data: [],
      errors: null,
      isLoading: false,
    });
    expect(selectError(appState)).toBe(null);
  });

  it('setErrorsIssues', () => {
    const error = 'error';
    const newState = reducer(initialState, setErrorsIssues(error));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectAllIssues(appState.issues)).toBe(undefined);
    expect(selectError(appState)).toBe(error);
  });
});
