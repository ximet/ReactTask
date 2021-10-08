import * as React from 'react';
import styled from 'styled-components';
import { useAuth } from 'hooks';
import { PublicLayout, PrivateLayout } from './layouts';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.background.main};
`;

const PublicRoutes = React.lazy(() => import('pages/public'));
const PrivateRoutes = React.lazy(() => import('pages/private'));

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledWrapper>
      {isLoggedIn ? (
        <PrivateLayout>
          <PrivateRoutes />
        </PrivateLayout>
      ) : (
        <PublicLayout>
          <PublicRoutes />
        </PublicLayout>
      )}
    </StyledWrapper>
  );
};

export default App;
