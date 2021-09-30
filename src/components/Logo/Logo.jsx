import './Logo.css';
import logo from '../../assets/img/logo.svg';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" className="logo__img" />
    </div>
  );
}

export default Logo;
