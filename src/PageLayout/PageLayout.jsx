import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
