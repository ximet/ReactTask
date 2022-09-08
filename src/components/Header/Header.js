import './Header.module.css';

function Header() {
  return (
    <h1 className="header-container">
      <img src={require('../../../public/images/logo.png')} alt="Logo image" />
      <span> Show me the weather </span>
    </h1>
  );
}

export default Header;
