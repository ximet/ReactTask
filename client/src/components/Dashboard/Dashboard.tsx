import React, { FunctionComponent } from 'react';

// Components
import DashboardCurrent from './DashboardCurrent/DashboardCurrent';
import DashboardForecast from './DashboardForecast/DashboardForecast';

// Styles
import * as S from './Dashboard.styles';

const Dashboard: FunctionComponent = () => (
  <S.Dashboard>
    <DashboardCurrent />
    <DashboardForecast />
  </S.Dashboard>
);

export default Dashboard;
