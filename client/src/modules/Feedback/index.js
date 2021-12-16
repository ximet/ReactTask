import { Feedback, mapStateToProps } from './containers/Feedback';
import { connect } from 'react-redux';
import * as actions from './actions';

export default connect(mapStateToProps, actions)(Feedback);
