import React from 'react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Index';

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
