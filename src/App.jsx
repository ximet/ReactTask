import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';
import ContentWrapperContainer from './containers/ContentWrapperContainer';
import 'normalize.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useInitialize } from './hooks/initialize';

function App() {
  const theme = useSelector(state => state.theme.name);

  useInitialize();

  return (
    <BrowserRouter>
      <div className={['global-wrapper', `theme-mode_${theme}`].join(' ')}>
        <HeaderWrapper />
        <ContentWrapperContainer />
        <FooterWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
