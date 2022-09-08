import { useEffect, useState } from 'react';
import './Footer.module.css';

function Footer() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function getTime() {
    const currentdate = new Date();
    const hour = getLocalHours(currentdate);
    const min = getLocalMinutes(currentdate);
    const sec = getLocalSeconds(currentdate);
    const currentTime = hour + ':' + min + ':' + sec;
    return currentTime;
  }

  function getLocalHours(currentdate) {
    return currentdate.getHours();
  }

  function getLocalMinutes(currentdate) {
    const min = currentdate.getMinutes();
    if (min < 10) {
      return `0${min}`;
    }
    return min;
  }

  function getLocalSeconds(currentdate) {
    const sec = currentdate.getSeconds();
    if (sec < 10) {
      return `0${sec}`;
    }
    return sec;
  }

  return (
    <footer>
      <p>Current time: {time}</p>
    </footer>
  );
}

export default Footer;
