import classes from './CurrentCityForecastView.module.scss';

import Sidebar from '../../layouts/Sidebar/Sidebar';
import ContentWrapper from '../../layouts/ContentWrapper/ContentWrapper';
import Warnings from '../../components/Warnings/Warnings';
import FavoriteCities from '../../components/FavoriteCities/FavoriteCities';

function CurrentCityForecastView() {
  return (
    <div className={classes.viewContainer}>
      <Sidebar>
        <Warnings />
      </Sidebar>
      <ContentWrapper>ContentWrapper</ContentWrapper>
      <Sidebar>
        <FavoriteCities />
      </Sidebar>
    </div>
  );
}

export default CurrentCityForecastView;
