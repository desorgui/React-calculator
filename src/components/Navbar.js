import React from 'react';
import { NavLink } from 'react-router-dom';

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

  return (
    <nav className="navBar">
      <h2>Maths Magician</h2>
      <ul className="showMenu">
        {links.map((link) => (
          <li role="linktest" key={link.id}>
            <NavLink
              to={link.path}
              className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
