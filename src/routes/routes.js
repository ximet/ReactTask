
import Feedback from '../components/feedback/Feedback';
import Home from '../components/home/Home';
import Info from '../components/info/Info';
import { FEEDBACK_ROUTE, HOME_ROUTE, INFO_ROUTE } from '../utils/consts';

export const routes = [
  {
    path: FEEDBACK_ROUTE,
    Component: Feedback
  },
  {
    path: INFO_ROUTE,
    Component: Info
  },
  {
    path: HOME_ROUTE,
    Component: Home
  }
];
