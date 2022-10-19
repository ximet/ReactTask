import React from 'react';

export default function ToggleDark(props) {

  return (
    <div>
      <div>
        <label>
          Change theme Dark/Light
          <input
            type="button"
            id="checkbox-toggle"
            onClick={() => {
              props.toggleDark();
            }}
            value="dark/light"
          />
        </label>
      </div>
    </div>
  );
}
