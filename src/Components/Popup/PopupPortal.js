import Popup from './Popup';
import * as _ReactDOM from 'react-dom';

const portalPopup = props => {
  return _ReactDOM.createPortal(<Popup message={props.message} />, document.querySelector('body'));
};

export default portalPopup;
