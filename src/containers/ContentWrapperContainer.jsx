import { connect } from 'react-redux';
import ContentWrapper from '../layouts/ContentWrapper/ContentWrapper';
import ErrorBox from '../components/ErrorBox/ErrorBox';
import PropTypes from 'prop-types';

function ContentWrapperContainer({ isFetchingError }) {
  if (isFetchingError) {
    return <ErrorBox />;
  }
  return <ContentWrapper />;
}

ContentWrapperContainer.propTypes = {
  isFetchingError: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isFetchingError: state.serverApi.isFetchingError
  };
};

export default connect(mapStateToProps)(ContentWrapperContainer);
