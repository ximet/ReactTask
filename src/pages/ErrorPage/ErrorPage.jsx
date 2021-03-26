import React from 'react';
import PageLayout from '../../PageLayout/PageLayout';
import styles from './ErrorPage.scss';
import image from '../../../public/error.jpg';

function ErrorPage() {
  return (
    <PageLayout>
      <div className={styles.error}>
        <img src={image} className={styles.error__img} alt="Error Pic" />
      </div>
    </PageLayout>
  );
}

export default ErrorPage;
