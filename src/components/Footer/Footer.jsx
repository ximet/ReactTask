import React, { useEffect, useState } from 'react';
import * as Styled from './Footer.Styles';

function Footer() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <Styled.Footer>
      <span>{date.toLocaleString()}</span>
    </Styled.Footer>
  );
}

export default Footer;
