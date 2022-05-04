import * as S from './TextArea.styles';

const Textarea = ({
  labelName,
  labelTitle,
  textValue,
  changeHandler,
  blurHandler,
  isError,
  errorMessage
}) => {
  return (
    <S.TextareaWrapper showError={isError}>
      <label htmlFor={labelName || 'textarea'}>{labelTitle}</label>
      <textarea
        id={labelName || 'textarea'}
        value={textValue}
        onChange={changeHandler}
        onBlur={blurHandler}
      ></textarea>
      {isError && <S.ErrorMessage>{errorMessage || null}</S.ErrorMessage>}
    </S.TextareaWrapper>
  );
};

export default Textarea;
