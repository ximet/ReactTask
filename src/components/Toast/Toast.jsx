import React, { useEffect, useState } from 'react';
import classes from './Toast.module.css';

const toastList = [
  {
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
    isOpen: true
  }
];

function Toast() {
  const [list, setList] = useState(toastList);

  const deleteToast = id => {
    const index = list.findIndex(e => e.id === id);
    list.splice(index, 1);
    setList([...list]);
  };

  useEffect(() => {
    setList(toastList);
  }, [toastList]);

  useEffect(() => {
    const autoDeleteTime = 3000;
    const toast = list.find(e => e.isOpen === true);

    if (toast) {
      setTimeout(() => {
        deleteToast(toast.id);
        setList([...toastList]);
      }, autoDeleteTime);
    }
  }, [list]);

  return (
    <div className={classes.toast_container}>
      {list.map((toast, i) => (
        <div
          key={i}
          className={`${classes.toast} ${classes.bottom_right}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>&times;</button>
          <div>
            <p className={classes.toast_title}>{toast.title}</p>
            <p className={classes.toast_description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Toast.propTypes = {
//   toastList: PropTypes.array.isRequired
// };

export default Toast;
