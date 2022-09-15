import React, { useState } from 'react';

export function DropdownMenu(props) {
  const { styles } = props;

  const [isOpen, setIsOpen] = useState(false);

  const showCities = ev => {
    ev.preventDefault();

    const dropdownContent = [...document.getElementsByClassName(styles.dropdownContent)][0];
    if (isOpen) {
      setIsOpen(false);
      dropdownContent.style.display = 'none';
    } else {
      setIsOpen(true);
      dropdownContent.style.display = 'inline-block';
    }
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button className={styles.dropdownBtn} onClick={showCities}>
          Cities
        </button>
        <div className={styles.dropdownContent}>
          <a href="#">Sofia</a>
          <a href="#">Athens</a>
          <a href="#">Istanbul</a>
        </div>
      </div>
    </>
  );
}
