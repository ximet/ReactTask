import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tooltip.style';

const Tooltip = ({ children, text, tooltip }) => {
  return (
    <S.TooltipContainer>
      {children}
      <S.TooltipText tooltip={tooltip}>{text}</S.TooltipText>
    </S.TooltipContainer>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.bool.isRequired
};

export default Tooltip;
