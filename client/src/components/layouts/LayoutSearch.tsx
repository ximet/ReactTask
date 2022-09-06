import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import HeaderSearch from 'components/HeaderSearch';

const LayoutSearch = () => {
  return (
    <>
      <HeaderSearch />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutSearch;
