import React from 'react';
import PageLayout from '../../PageLayout/PageLayout';
import { Container, ErrorImage } from './ErrorPage.Styles';
import image from '../../../public/error.jpg';

function ErrorPage() {
  return (
    <PageLayout>
      <Container>
        <ErrorImage src={image} alt="Error Pic" />
      </Container>
    </PageLayout>
  );
}

export default ErrorPage;
