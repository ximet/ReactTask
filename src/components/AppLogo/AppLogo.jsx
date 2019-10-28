import React from 'react';

class AppLogo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="logo">
        <img src={this.props.logoSrc} alt="appLogo" />
      </div>
    );
  }
}

export default AppLogo;
