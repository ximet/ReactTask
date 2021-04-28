import { connect } from 'react-redux';
import Feedback from './Feedback';
import { updateFormState, submitForm } from '../../redux/actions/feedback';
import {
  getIsFormValid,
  getIsFormSubmitted,
  getFormState
} from '../../redux/selectors/feedbackSelectors';

const mapStateToProps = state => ({
  isFormValid: getIsFormValid(state),
  isFormSubmitted: getIsFormSubmitted(state),
  formState: getFormState(state)
});

const masDispatchToProps = dispatch => ({
  updateFormState: (name, value) => dispatch(updateFormState(name, value)),
  submitForm: event => dispatch(submitForm(event))
});

export default connect(mapStateToProps, masDispatchToProps)(Feedback);
