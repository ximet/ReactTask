import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styles/globalStyles';

const Link = ({ place, onClick, id }) => (
  <Styled.Item
    onClick={e => onClick({ e, place, id })}
    onKeyDown={onClick}
    tabIndex={0}
    role="button"
  >
    {place}
  </Styled.Item>
);

Link.propTypes = {
  place: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Link;
