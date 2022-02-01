import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Portal({ children }) {
  return (
    ReactDOM.createPortal(
      children,
      document.getElementById('modal-root'),
    )
  );
}

Portal.propTypes = { children: PropTypes.element.isRequired };

export default Portal;
