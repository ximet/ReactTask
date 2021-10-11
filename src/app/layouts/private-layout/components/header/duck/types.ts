import { match as RouterMatch } from 'react-router-dom';
import { TFunction } from 'i18next';
import { HeaderLink } from 'types/entities';
import { RootState } from 'store/types';

export type GetLinks = (t: TFunction, auth?: RootState['auth']) => HeaderLink[];

export type IsActive = (
  link: HeaderLink,
  match: RouterMatch | null,
  pathname: string,
) => boolean;
