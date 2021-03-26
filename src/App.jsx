import { useState, useEffect } from 'react';
import { refreshAccessToken } from './common/auth';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshAccessToken()
      .then(() => setIsLoading(false))
  })

  return (
    <div className="app">
      <Header />
      {!isLoading ? <Home /> : <p>Getting things ready for you...</p>}
      <Footer />
    </div>
  );
};
export default App;
