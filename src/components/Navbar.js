import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  const role = 'linktest';

  return (
    <nav className="navBar">
      <div className="container">
      <img src={logo} alt='logo' />
      <ul className="showMenu">
        {links.map((link) => (
          <li role={role} key={link.id}>
            <NavLink
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};
export default Navbar;
