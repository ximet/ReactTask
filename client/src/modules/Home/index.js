import { Home } from './components/Home';
import { connect } from 'react-redux';
import mapStateToProps from '../../store/common_redux_utils/mapStateToProps';
import mapDispatchToProps from '../../store/common_redux_utils/mapDispatchToProps';

export default connect(mapStateToProps('Home'), mapDispatchToProps('Home'))(Home);
