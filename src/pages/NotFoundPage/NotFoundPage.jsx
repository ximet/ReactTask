import { Link } from 'react-router-dom';
import { translations } from '../../utils/translations';
import * as S from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <S.Wrapper>
      <S.Title>{translations.msg_page_not_found_404_error}</S.Title>
      <Link to="/">{translations.msg_page_not_found_link}</Link>
    </S.Wrapper>
  );
};

export default NotFoundPage;
