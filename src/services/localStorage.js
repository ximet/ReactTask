let userCounter = 1;

const setInLS = (user, ) => {
   const userInput = JSON.parse(localStorage.getItem(('userInput')));
   userInput['user' + userCounter++] = user;
   localStorage.setItem('userInput', JSON.stringify(userInput));
}

export { setInLS };
