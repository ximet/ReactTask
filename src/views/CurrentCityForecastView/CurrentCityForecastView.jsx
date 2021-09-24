import classes from './CurrentCityForecastView.module.scss';

import Sidebar from '../../layouts/Sidebar/Sidebar';
import ContentWrapper from '../../layouts/ContentWrapper/ContentWrapper';

function CurrentCityForecastView() {
  return (
    <div className={classes.viewContainer}>
      <Sidebar>LeftSidebar</Sidebar>
      <ContentWrapper>ContentWrapper</ContentWrapper>
      <Sidebar>rightSidebar</Sidebar>
    </div>
  );
}

export default CurrentCityForecastView;
