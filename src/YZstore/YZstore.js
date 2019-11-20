class YZstore {
  constructor(reducer, initialState) {
    this.currentReducer = reducer;
    this.currentState = initialState;
    this.defaultListener = [() => {}];
    this.listeners = [];
  }

  getState() {
    return this.currentState;
  }

  getProp(prop) {
    return this.currentState[prop];
  }

  dispatch(action) {
    this.currentState = this.currentReducer(this.currentState, action);
    this.findListener(action.type).forEach(element => {
      element.listenerFunc()
    });
    return action;
  }

  findListener(actionType) {
    let listenersArr = this.listeners.filter((el) => el.actionType == actionType);
    if (!listenersArr) return this.defaultListener;
    return listenersArr;
  }

  subscribe(actionType, listenerFunc) {
    this.listeners.push({
      actionType: actionType,
      listenerFunc: listenerFunc
    })
  }
}

export default YZstore;