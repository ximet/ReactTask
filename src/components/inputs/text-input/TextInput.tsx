import * as React from 'react';
import { uniqueId } from 'lodash-es';
import { Typography, VisuallyHidden } from 'components';
import * as S from './styles';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isHiddenLabel?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  isHiddenLabel,
  // input is internal prop for redux field
  // @ts-ignore
  input,
  ...rest
}) => {
  const inputIdRef = React.useRef(uniqueId('input'));

  return (
    <S.Wrapper>
      {React.createElement(
        isHiddenLabel ? VisuallyHidden : React.Fragment,
        {},
        <Typography variant="label" htmlFor={inputIdRef.current}>
          {label}
        </Typography>,
      )}
      <S.Input id={inputIdRef.current} {...input} {...rest} />
    </S.Wrapper>
  );
};

export default TextInput;
