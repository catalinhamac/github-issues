import reducer, {
  initialState,
  setIssues,
  setSuccessIssues,
  setErrorsIssues,
  selectIssues,
  selectIsLoading,
  selectErrors,
  slice,
} from '../issues-slice';

describe('issues-slice', () => {
  it('setIssues', () => {
    const newState = reducer(initialState, setIssues());
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(true);
  });

  it('setSuccessIssues', () => {
    const payload = [];
    const newState = reducer(initialState, setSuccessIssues(payload));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectIssues(appState)).toEqual({
      data: [],
      errors: null,
      isLoading: false,
    });
    expect(selectErrors(appState)).toBe(null);
  });

  it('setErrorsIssues', () => {
    const newState = reducer(initialState, setErrorsIssues());
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectIssues(appState)).toEqual({
      data: null,
      errors: undefined,
      isLoading: false,
    });
    expect(selectErrors(appState)).toBe(undefined);
  });
});
