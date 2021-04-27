import { connect } from 'react-redux';
import Feedback from './Feedback';
import { setForm, submitForm } from '../../redux/actions/feedback';
import {
  getIsFormValid,
  getIsFormSubmitted,
  getformState
} from '../../redux/selectors/feedbackSelectors';

const mapStateToProps = state => ({
  isFormValid: getIsFormValid(state),
  isFormSubmitted: getIsFormSubmitted(state),
  form: getformState(state)
});

const masDispatchToProps = dispatch => ({
  setForm: value => dispatch(setForm(value)),
  submitForm: value => dispatch(submitForm(value))
});

export default connect(mapStateToProps, masDispatchToProps)(Feedback);
