import { connect } from 'react-redux';
import App from './App';
import { initializeApp } from './redux/actions/appInitializationAction';

const mapStateToProps = (state, ownProps) => ({
  location: state.location.location
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initializeApp: () => dispatch(initializeApp)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
