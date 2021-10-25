import './Logo.css';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo__img" />
      </Link>
    </div>
  );
}

export default Logo;
