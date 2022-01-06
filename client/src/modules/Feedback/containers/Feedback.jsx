import React from 'react';
import * as S from '../../../app_data/styles_info/common_styles';
import FeedbackForm from '../components/FeedbackForm';
import DetailsInfo from './DetailsInfo';
import { getEmail, getIsMessageSending, getMessage, getName, getPhone } from '../selectors';
import PropTypes from 'prop-types';

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

export const mapStateToProps = state => {
  return {
    name: getName(state),
    email: getEmail(state),
    phone: getPhone(state),
    message: getMessage(state),
    isSending: getIsMessageSending(state)
  };
};

Feedback.propTypes = {
  changeName: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changeFeedbackMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  name: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  email: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  message: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  isSending: PropTypes.bool
};
