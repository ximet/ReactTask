function mapStateToProps(component) {
  switch (component) {
    case 'Home': {
      return function (state) {
        return {
          title: state.home.title
        };
      };
    }
    case 'Feedback': {
      return function (state) {
        return {
          name: state.feedback.name,
          email: state.feedback.email,
          phone: state.feedback.phone,
          message: state.feedback.message
        };
      };
    }
    default:
      return undefined;
  }
}

export default mapStateToProps;
