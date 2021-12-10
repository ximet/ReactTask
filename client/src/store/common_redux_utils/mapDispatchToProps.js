import { bindActionCreators } from 'redux';
import { changeTitleAC } from '../../modules/Home/actions';

function mapDispatchToProps(component) {
  switch (component) {
    case 'Home':
      return function (dispatch) {
        return {
          changeTitle: bindActionCreators(changeTitleAC, dispatch)
        };
      };
    default:
      return undefined;
  }
}

export default mapDispatchToProps;