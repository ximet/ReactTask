function mapStateToProps(component) {
  switch (component) {
    case 'Home': {
      return function (state) {
        return {
          title: state.home.title
        };
      };
    }
    default:
      return undefined;
  }
}

export default mapStateToProps;