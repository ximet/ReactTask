import React, { FC } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import { PositionContextProvider } from 'context/positionContext';

export const Layout: FC = () => {
  return (
    <PositionContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </PositionContextProvider>
  );
};
