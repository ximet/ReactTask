import { connect } from 'react-redux';
import ContentWrapper from '../layouts/ContentWrapper/ContentWrapper';
import ErrorBox from '../components/ErrorBox/ErrorBox';
import PropTypes from 'prop-types';

function ContentWrapperContainer({ fetchingError }) {
  if (fetchingError) {
    return <ErrorBox error={fetchingError} />;
  }
  return <ContentWrapper />;
}

ContentWrapperContainer.propTypes = {
    fetchingError: PropTypes.instanceOf(Error).isRequired
};

const mapStateToProps = state => {
  return {
    fetchingError: state.serverApi.fetchingError
  };
};

export default connect(mapStateToProps)(ContentWrapperContainer);
