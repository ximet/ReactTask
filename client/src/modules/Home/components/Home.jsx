import React from 'react';

export function Home(props) {
  return (
    <>
      <h1>{props.title}</h1>

      <div>Hello Kseniya!</div>
      <button
        onClick={() => {
          props.changeTitle('Ghbdtn');
        }}
      >
        Click me!
      </button>
      <span>We will add some new components later</span>
    </>
  );
}
