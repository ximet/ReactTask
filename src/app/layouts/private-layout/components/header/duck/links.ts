import { routes } from 'configs';
import * as Types from './types';

export const userLinks: Types.GetLinks = (t) => [
  {
    path: routes.home,
    exact: true,
    text: t('common:home'),
    title: t('common:open_home'),
  },
  {
    path: routes.countries,
    exact: true,
    text: t('common:list_of_countries'),
    title: t('common:open_list_of_countries'),
    descendants: [routes.country],
  },
];

export const adminLinks: Types.GetLinks = () => [];
