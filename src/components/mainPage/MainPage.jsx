import classes from './mainPage.scss';

import Routes from '../../config/Routes';
import { useEffect, useState } from 'react';
import { Cookie } from '../../dataService/cookie';
import { getAccessTokenFromAPI } from '../../dataService/api';
import Loader from '../loader/Loader';

function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(async() => {
    setLoading(true);
    const token = Cookie.getToken() || await getAccessTokenFromAPI();

    if(token) {
      Cookie.setToken(token);
      setLoading(false)
    }
  }, [])

  if(loading) return <div className={`${classes.main} ${classes.loader}`}><Loader /></div>

  return (
    <div className={classes.main}>
      <Routes />
    </div>
  );
}

export default MainPage;
