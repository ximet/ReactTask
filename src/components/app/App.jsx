import React from 'react';
import Button from '../button/button.jsx';
import Header from '../header/header.jsx';
import Sidebar from '../sidebar/sidebar.jsx';
import WeatherPreviewContainer from '../weatherPreviewContainer/weatherPreviewContainer.jsx';
import WeatherInfoContainer from '../weatherInfoContainer/weatherInfoContainer.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      logo: {
        source: 'smth',
        alt: 'smth',
      },
      homeIcon: {
        source: 'smth',
        alt: 'smth',
      },
    };
  }

  onHandleClick = () => {
    // console.log('Hello World!');
  }

  render() {
    const { logo, homeIcon } = this.state;
    return (
      <>
        <Header logo={logo} />
        <Button text="Click me!" handleClick={this.onHandleClick} />
        <Sidebar homeUrl="Smth" homeIcon={homeIcon} />
        <WeatherPreviewContainer />
        <WeatherInfoContainer />
      </>
    );
  }
}

export default App;
