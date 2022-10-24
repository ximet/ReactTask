import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import SecondaryPagesLayout from 'components/layouts/SecondaryPagesLayout';
import Button, { ButtonStyles } from 'components/Button/Button';
import styles from './Error.module.scss';

const Error: FC = () => {
  return (
    <SecondaryPagesLayout>
      <h2 data-testid="title-404" className={styles.notFound}>
        404 - No page found
      </h2>
      <h2 className={styles.title}>Oh no...</h2>
      <div className={styles.textBox}>
        <p>
          It looks like something has gone wrong, you may have mistyped the address or the page has
          been removed.
        </p>
        <p>Try again or return to our homepage, where you can find all the latest news.</p>
        <Link to="/">
          <div className={styles.buttonBox}>
            <Button type="button" className={ButtonStyles.ErrorBtn}>
              Return Home
            </Button>
          </div>
        </Link>
      </div>
    </SecondaryPagesLayout>
  );
};

export default Error;
