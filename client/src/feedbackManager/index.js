export const addFeedback = feedback => {
  localStorage.setItem(feedback.name, JSON.stringify(feedback));
};
