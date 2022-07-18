import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPaths = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact us', path: '/contacts' }
];

export default function Navigation() {
  return (
    <nav className="container">
      <ul className="nav__list">
        {NavigationPaths.map(item => (
          <li key={item.title}>
            <Link className="nav__link" to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
