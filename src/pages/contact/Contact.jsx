import { Form } from '../../components';
import * as S from './Contact.styles';

const Contact = () => {
  return (
    <div>
      <S.ContactContainer>
        <S.ContactTitleWrapper>Our contact information below:</S.ContactTitleWrapper>
        <S.ContactWrapper>
          <p>Email for general inquiries: </p>
          <a href="mailto:>weather@weather.com">weather@weather.com</a>
          <p>Phone:</p>
          <span>+358 20 1101 70</span>
        </S.ContactWrapper>
      </S.ContactContainer>
      <S.TitleWrapper>Would you like to improve us?</S.TitleWrapper>
      <Form />
    </div>
  );
};

export default Contact;
