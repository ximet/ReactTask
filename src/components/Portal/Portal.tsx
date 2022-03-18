import ReactDOM from 'react-dom';

interface LauncherProps {
  children?: JSX.Element | JSX.Element[],
}

function Portal({ children } : LauncherProps) {
  return (
    ReactDOM.createPortal(
      children,
      document.getElementById('modal-root'),
    )
  );
}

export default Portal;
