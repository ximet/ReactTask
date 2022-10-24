import * as actions from './actionTypes.js';

function SAVE_USER_FEEDBACK(data) {
  return {
    type: actions.SAVE_USER_FEEDBACK,
    payload: {
      answer1: data.question1,
      answer2: data.question2,
      answer3: data.question3,
      answer4: data.question4
    }
  };
}

export { SAVE_USER_FEEDBACK };
