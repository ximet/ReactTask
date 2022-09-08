import React, { FunctionComponent } from 'react';

// Components
import Dashboard from '../../components/Dashboard';

// Styles
import { Container } from '../../styles/global';

const Home: FunctionComponent = () => (
  <main>
    <Container>
      <Dashboard />
    </Container>
  </main>
);

export default Home;
