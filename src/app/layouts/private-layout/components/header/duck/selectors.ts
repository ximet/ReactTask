import { matchPath } from 'react-router-dom';
import { userLinks, adminLinks } from './links';
import * as Types from './types';

export const getLinks: Types.GetLinks = (t, auth) =>
  auth?.isAdmin ? adminLinks(t) : userLinks(t);

export const isActive: Types.IsActive = (link, match, pathname) =>
  !!(
    match ||
    link.descendants?.some((path) => matchPath(pathname, { path, exact: true }))
  );
