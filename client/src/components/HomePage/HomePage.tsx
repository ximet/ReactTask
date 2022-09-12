import React, { FunctionComponent } from 'react';

// Components
import Dashboard from 'components/Dashboard/Dashboard';

// Styles
import { Container } from 'styles/global';

const HomePage: FunctionComponent = () => (
  <main>
    <Container>
      <Dashboard />
    </Container>
  </main>
);

export default HomePage;
