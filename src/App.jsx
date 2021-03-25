import { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { refreshAccessToken } from './common/auth';

const App = () => {
  const isUserLogged = !!JSON.parse(sessionStorage.getItem('token'));
  const [isLogged, setIsLogged] = useState(isUserLogged);

  const handleLogin = () => {
    refreshAccessToken();
    setIsLogged(true);
  };

  return (
    <div className="app">
      <Header isLogged={isLogged} onLogin={handleLogin} />
      {isLogged && <Home />}
      <Footer />
    </div>
  );
};
export default App;
