import { Link } from 'react-router-dom';
import { translations } from '../../utils/translations';
import * as S from './NotFoundPage.styles';

const NotFoundPage = () => {
  const pageNotFoundIcon = require('../../utils/icons/notfound.png');
  return (
    <S.Wrapper>
      <S.ImageWrapper src={pageNotFoundIcon} alt="404 page" />
      <S.Title>{translations.msg_page_not_found_404_error}</S.Title>
      <p>{translations.msg_page_not_found_description}</p>
      <Link to="/">{translations.msg_page_not_found_link}</Link>
      <span>{translations.msg_page_not_found_try_again}</span>
    </S.Wrapper>
  );
};

export default NotFoundPage;
