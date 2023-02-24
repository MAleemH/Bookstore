/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const links = [
  { path: '/', text: 'Home' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav>
    <h1 className="web-title">Bookstore CMS</h1>
    <ul className="nav-items">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
    <BsFillPersonFill />
  </nav>
);

export default Navbar;
