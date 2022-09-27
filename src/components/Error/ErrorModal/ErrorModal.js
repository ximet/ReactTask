import ReactDOM from 'react-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function ErrorModal({ title, message, onConfirm }) {
  return (
    <>
      {ReactDOM.createPortal(
        <ErrorPopup title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('modal-root')
      )}
      {}
    </>
  );
}

export default ErrorModal;
