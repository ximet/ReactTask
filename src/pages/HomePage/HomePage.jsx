import React from 'react';
import styles from './HomePage.scss';
import PageLayout from '../../PageLayout/PageLayout';

function HomePage() {
  return (
    <PageLayout>
      <div className={styles.main}></div>
    </PageLayout>
  );
}

export default HomePage;
