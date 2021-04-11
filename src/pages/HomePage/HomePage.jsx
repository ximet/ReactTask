import React from 'react';
import PageLayout from '../../PageLayout/PageLayout';
import styles from './HomePage.scss';


function HomePage() {
  return (
    <PageLayout>
      <div className={styles.main} />
    </PageLayout>
  );
}

export default HomePage;
