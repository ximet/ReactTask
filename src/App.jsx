import React from 'react';
import Navigation from './Navigation/Navigation';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
