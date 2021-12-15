import React from 'react';
import * as S from '../style';
import FeedbackForm from '../components/FeedbackForm';
import DetailsInfo from './DetailsInfo';

export function Feedback(props) {
  return (
    <S.Box>
      <S.Container maxWidth={970}>
        <S.Title m={'0 22px'} variant="h4" align="left">
          Send us a message
        </S.Title>
        <S.GridContainer container spacing={2}>
          <FeedbackForm {...props} />
          <DetailsInfo />
        </S.GridContainer>
      </S.Container>
    </S.Box>
  );
}

export const mapStateToProps = ({ feedback: { name, email, phone, message, isSending } }) => {
  return {
    name,
    email,
    phone,
    message
  };
};
