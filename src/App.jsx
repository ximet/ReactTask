import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/blocks/Header/Header';
import MainContainer from './containers/MainContainer';
import SideBar from 'components/blocks/SideBar/SideBar';
import { appWrapper, container } from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className={ appWrapper }>
          <div className={ container }>
            <SideBar />
            <Router>
              <MainContainer />
            </Router>
          </div>
        </section>
      </div>
    );
  }
}

export default App;