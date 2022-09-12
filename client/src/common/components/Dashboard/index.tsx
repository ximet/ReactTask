import React, { FunctionComponent } from 'react';

// Components
import DashboardCurrent from './DashboardCurrent';
import DashboardForecast from './DashboardForecast';

// Styles
import * as S from './styles';

const Dashboard: FunctionComponent = () => (
  <S.Dashboard>
    <DashboardCurrent />
    <DashboardForecast />
  </S.Dashboard>
);

export default Dashboard;
