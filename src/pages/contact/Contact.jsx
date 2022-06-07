import { Form } from '../../components';
import { translations } from '../../utils/translations';
import * as S from './Contact.styles';

const Contact = () => {
  return (
    <>
      <S.ContactContainer>
        <S.ContactTitleWrapper>{translations.msg_page_contacts_title}</S.ContactTitleWrapper>
        <S.ContactWrapper>
          <p>{translations.msg_page_contacts_enquiry_title}</p>
          <a href="mailto:>weather@weather.com">weather@weather.com</a>
          <p>{translations.msg_page_contacts_phone_title}</p>
          <span>+358 20 1101 70</span>
        </S.ContactWrapper>
      </S.ContactContainer>
      <S.TitleWrapper>{translations.msg_page_contacts_feedback_title}</S.TitleWrapper>
      <Form />
    </>
  );
};

export default Contact;
