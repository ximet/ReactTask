import * as S from './TextArea.styles';

const Textarea = ({ labelName, labelTitle, value, onChange, onBlur, isError, errorMessage }) => {
  return (
    <S.TextareaWrapper showError={isError}>
      <label htmlFor={labelName || 'textarea'}>{labelTitle}</label>
      <textarea
        id={labelName || 'textarea'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
      {isError && <S.ErrorMessage>{errorMessage || null}</S.ErrorMessage>}
    </S.TextareaWrapper>
  );
};

export default Textarea;
