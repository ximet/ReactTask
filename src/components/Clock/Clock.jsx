import { useState, useEffect } from 'react';
import * as S from './Clock.styles';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const currentTime = date.toLocaleTimeString(window.navigator.language);
  const dayName = date.toLocaleString(window.navigator.language, { weekday: 'long' });

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <S.Wrapper>
      <h1>{currentTime}</h1>
      <h2>{dayName}</h2>
    </S.Wrapper>
  );
};
export default Clock;
