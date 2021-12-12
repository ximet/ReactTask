import { Feedback } from './components/Feedback';
import { connect } from 'react-redux';
import mapStateToProps from '../../store/common_redux_utils/mapStateToProps';
import mapDispatchToProps from '../../store/common_redux_utils/mapDispatchToProps';

export default connect(mapStateToProps('Feedback'),mapDispatchToProps('Feedback'))(Feedback);
