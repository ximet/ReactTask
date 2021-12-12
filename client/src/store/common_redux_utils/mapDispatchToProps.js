import { bindActionCreators } from 'redux';
import { changeNameAC, changeEmailAC, changePhoneAC, changeMessageAC, sendMessageAC } from '../../modules/Feedback/actions';
import { changeTitleAC } from '../../modules/Home/actions';

function mapDispatchToProps(component) {
  switch (component) {
    case 'Home':
      return function (dispatch) {
        return {
          changeTitle: dispatch(changeTitleAC)
        };
      };
    case 'Feedback':
      return function (dispatch) {
        return {
          changeName: (name) => dispatch(changeNameAC(name)),
          changeEmail: (email) =>  dispatch(changeEmailAC(email)),
          changePhone: (phone) => dispatch(changePhoneAC(phone)),
          changeMessage: (message) => dispatch(changeMessageAC(message)),
          sendMessage: dispatch(sendMessageAC),

        };
      };
    default:
      return undefined;
  }
}

export default mapDispatchToProps;
