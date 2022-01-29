import React from 'react';
import classes from '../../App.module.css';
import Card from '../../atomic-components/Card/Card';

function Home() {
  return (
    <div className="mainSection">
      <div className={classes.image_container}>
        <Card />
      </div>
    </div>
  );
}

export default Home;
