import styled from 'styled-components';

const StyledSwitcherButton = styled('button')`
  --switch-height: ${(props) => props.theme.typography.fontSizes[3]};
  --switch-width: ${(props) => props.theme.typography.fontSizes[0]};
  --switch-thumb-size: calc(var(--switch-height) - 1px * 2);

  flex-shrink: 0;
  display: block;
  border: none;
  height: var(--switch-height);
  width: var(--switch-width);
  background-color: ${(props) => props.theme.palette.gray[600]};
  border-radius: calc(var(--switch-height) / 2);
  position: relative;
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transition};

  &:hover {
    background-color: ${(props) => props.theme.palette.gray[500]};
  }

  &[aria-checked='false'] {
    &::before {
      left: 1px;
    }
  }

  &[aria-checked='true'] {
    background-color: ${(props) => props.theme.palette.primary.main};

    &:hover {
      background-color: ${(props) => props.theme.palette.primary.light};
    }

    &::before {
      left: calc(100% - var(--switch-thumb-size) - 1px);
    }
  }

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.palette.gray[400]};
  }

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme.palette.primary.dark};
  }

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    width: var(--switch-thumb-size);
    height: var(--switch-thumb-size);
    border-radius: 50%;
    background-color: ${(props) => props.theme.palette.gray[50]};
    transition: all ${(props) => props.theme.transition};
  }
`;

export default StyledSwitcherButton;
