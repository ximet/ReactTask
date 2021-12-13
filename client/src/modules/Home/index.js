import { Home, mapStateToProps, mapDispatchToProps } from './components/Home';
import { connect } from 'react-redux';

export default connect(mapStateToProps, mapDispatchToProps)(Home);
