export const baseActionCreator = (name, value) => {
  return {
    type: name,
    payload: value
  };
};
