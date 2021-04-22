import React from 'react';
import PageLayout from '../../PageLayout/PageLayout';
import { DivError, ImageError } from './ErrorPage.Styles';
import image from '../../../public/error.jpg';

function ErrorPage() {
  return (
    <PageLayout>
      <DivError>
        <ImageError src={image} alt="Error Pic" />
      </DivError>
    </PageLayout>
  );
}

export default ErrorPage;
