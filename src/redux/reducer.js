import * as actions from './actionTypes.js'

let lastId = 0;

function reducer(state = [], action) {
   if (action.type === actions.SAVE_USER_FEEDBACK) {
      return [
         ...state,
         {
            answers: { 
               id: ++lastId,
               answer1: action.payload.answer1,
               answer2: action.payload.answer2,
               answer3: action.payload.answer3,
               answer4: action.payload.answer4
            }
         }
      ]
   }

   return state;
}

export { reducer };
