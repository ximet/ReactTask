import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipText = styled.div`
  visibility: ${props => (props.tooltip ? 'visible' : 'hidden')};
  width: 200px;
  background-color: var(--dark-grey-color);
  color: var(--text);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 115%;
  opacity: 1;
  transition: opacity 0.3s;
`;
