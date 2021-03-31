import React from 'react';
import styles from './HomePage.scss';
import PageLayout from '../../PageLayout/PageLayout';

function HomePage() {
  return (
    <PageLayout>
      <div className={styles.main} />
    </PageLayout>
  );
}

export default HomePage;
