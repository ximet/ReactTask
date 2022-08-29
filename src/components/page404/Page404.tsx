import React, { FC } from 'react';

import commonStyle from '../../styles/commonStyles.css';

export const Page404: FC = () => {
  return (
    <main className={commonStyle.container}>
      <p>Page not found</p>
    </main>
  );
};
