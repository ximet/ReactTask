import { Feedback, mapStateToProps, mapDispatchToProps } from './components/Feedback';
import { connect } from 'react-redux';

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
