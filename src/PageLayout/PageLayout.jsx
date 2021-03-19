import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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

PageLayout.propTypes = {
  children: PropTypes.element,
};

export default PageLayout;
