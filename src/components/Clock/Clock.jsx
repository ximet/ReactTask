import { useState, useEffect } from 'react';
import * as S from './Clock.styles';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[date.getDay()];

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <S.Wrapper>
      <h1>{date.toLocaleTimeString('lt-LT')}</h1>
      <h2>{dayName}</h2>
    </S.Wrapper>
  );
};
export default Clock;
