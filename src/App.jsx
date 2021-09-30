import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';
import MiddleWrapper from './layouts/MiddleWrapper/MiddleWrapper';

import './App.css';
function App() {
  return (
    <div className="global-wrapper">
      <HeaderWrapper />
      <MiddleWrapper />
      <FooterWrapper />
    </div>
  );
}

export default App;
