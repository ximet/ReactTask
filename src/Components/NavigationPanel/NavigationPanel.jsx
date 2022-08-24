import { Link } from 'react-router-dom';

function NavigationPanel() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="detailedForecast">Detailed forecast</Link> |{' '}
        <Link to="findLocation">Find location</Link> | <Link to="about">About</Link> |{' '}
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export default NavigationPanel;
