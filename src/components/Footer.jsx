import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  const dateString = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    weekday: 'short',
  }).format(currentDate);

  return (
    <footer className="app__footer">
      {dateString}
    </footer>
  );
};

export default Footer;
