/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  });

  return (
    <h2>{date.toLocaleTimeString()}</h2>
  );
};

export default Clock;
