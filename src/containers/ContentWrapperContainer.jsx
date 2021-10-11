import { connect } from 'react-redux';
import ContentWrapper from '../layouts/ContentWrapper/ContentWrapper';
import ErrorBox from '../components/ErrorBox/ErrorBox';

function ContentWrapperContainer({ isFetchingError }) {    
  if (isFetchingError) {
    return <ErrorBox />;
  }
  return <ContentWrapper />;
}

const mapStateToProps = state => {    
  return {
    isFetchingError: state.serverApi.isFetchingError
  };
};

export default connect(mapStateToProps)(ContentWrapperContainer);
