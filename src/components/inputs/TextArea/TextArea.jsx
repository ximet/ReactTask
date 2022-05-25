import PropTypes from 'prop-types';
import * as S from './TextArea.styles';

const Textarea = ({ labelName, labelTitle, value, onChange, onBlur, isError, errorMessage }) => {
  return (
    <S.TextareaWrapper showError={isError}>
      <label htmlFor={labelName}>{labelTitle}</label>
      <textarea id={labelName} value={value} onChange={onChange} onBlur={onBlur}></textarea>
      {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.TextareaWrapper>
  );
};

Textarea.defaultProps = {
  labelName: 'textarea',
  errorMessage: null
};

Textarea.propTypes = {
  labelName: PropTypes.string,
  labelTitle: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired
};

export default Textarea;
