import React from 'react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Index';

// eslint-disable-next-line react/prop-types
function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
