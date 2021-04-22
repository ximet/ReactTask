import React, { useEffect, useState } from 'react';
import { StyledFooter } from './Footer.Styles';

function Footer() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <StyledFooter>
      <span>{date.toLocaleString()}</span>
    </StyledFooter>
  );
}

export default Footer;
