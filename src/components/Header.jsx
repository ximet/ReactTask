const Header = ({ isLogged, onLogin }) => {
  return (
    <header className="app__header">
      <p>Weather Forecast</p>
      {!isLogged && (
        <button className="button" onClick={onLogin}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
