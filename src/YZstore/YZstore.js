class YZstore {
  constructor(reducer, initialState) {
    this.currentReducer = reducer;
    this.currentState = initialState;
    this.defaultListener = () => {};
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
    this.findListener(action.type)()
    return action;
  }

  findListener(actionType) {
    let listener = this.listeners.find((el) => el.actionType == actionType);
    if (!listener) return this.defaultListener;
    return listener.listenerFunc;
  }

  subscribe(actionType, listenerFunc) {
    this.listeners.push({
      actionType: actionType,
      listenerFunc: listenerFunc
    })
  }
}

export default YZstore;