import React, { FunctionComponent } from 'react';

// Components
import Header from 'components/Header/Header';
import Dashboard from 'components/Dashboard/Dashboard';

// Styles
import { Container } from 'styles/global';

const LocationPage: FunctionComponent = () => (
  <>
    <Header />
    <main>
      <Container>
        <Dashboard />
      </Container>
    </main>
  </>
);
export default LocationPage;
