import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Theme/GlobalStyles';

const Link = ({ place, onClick, id }) => (
  <S.Item onClick={e => onClick({ e, place, id })} onKeyDown={onClick} tabIndex={0} role="button">
    {place}
  </S.Item>
);

Link.propTypes = {
  place: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Link;
