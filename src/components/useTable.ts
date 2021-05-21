import { useSelector, shallowEqual } from 'react-redux';

import {
  selectOpenIssues,
  selectClosedIssues,
} from '../store/issues/issues-slice';
import { AppRoute } from '../config/route-config';
import { Issue } from '../domain/Issue';

interface Props {
  openIssues?: Issue[];
  closedIssues?: Issue[];
  isActiveOpenRoute: boolean;
  isActiveClosedRoute: boolean;
}

export const useTable = (pathname?: string): Props => {
  const openIssues = useSelector(selectOpenIssues, shallowEqual);
  const closedIssues = useSelector(selectClosedIssues, shallowEqual);
  const isActiveOpenRoute = pathname === AppRoute.Open;
  const isActiveClosedRoute = pathname === AppRoute.Closed;

  return {
    openIssues,
    closedIssues,
    isActiveOpenRoute,
    isActiveClosedRoute,
  };
};
