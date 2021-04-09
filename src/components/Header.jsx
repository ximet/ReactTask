import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app__header">
      <p>Weather Forecast</p>
      <nav className="app__header__nav">
        <Link className="app__header__nav__link" to="/home">
          Home
        </Link>
        <Link className="app__header__nav__link" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};
export default Header;
