import './Header.module.css';

function Header() {
  return (
    <h1 className="header-container">
      <img src={require('../../../public/images/logo.png')} alt="Logo image" />
      <span> Show Me The Weather </span>
    </h1>
  );
}

export default Header;
