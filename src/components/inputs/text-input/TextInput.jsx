import * as React from 'react';
import { uniqueId } from 'lodash-es';
import { Typography, VisuallyHidden } from 'components';
import { StyledWrapper, StyledInput } from './components';

const TextInput = ({ label, isHiddenLabel, input, ...rest }) => {
  const inputIdRef = React.useRef(uniqueId('input'));

  return (
    <StyledWrapper>
      {React.createElement(
        isHiddenLabel ? VisuallyHidden : React.Fragment,
        {},
        <Typography as="label" variant="label" htmlFor={inputIdRef.current}>
          {label}
        </Typography>,
      )}
      <StyledInput id={inputIdRef.current} {...input} {...rest} />
    </StyledWrapper>
  );
};

export default TextInput;
