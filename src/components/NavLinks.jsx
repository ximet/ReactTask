import React from 'react';
import { Link } from 'react-router-dom';

const navigationPaths = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact us', path: '/contacts' }
];

export default function NavLinks() {
  return (
    <ul className="nav__list">
      {navigationPaths.map(item => (
        <li key={item.title}>
          <Link className="nav__link" to={item.path}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
