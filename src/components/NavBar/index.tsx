import { NavLink } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import { ACHIEVEMENTS, ROOT, SETTINGS } from '@/navigation/CONSTANTS';

import './navbar.scss';

function NavBar() {
  return (
    <header className="flex justify-between items-center">
      <img
        className="logo"
        src={logo}
        alt="Restry Logo featuring a pink lotus and whit highlights"
      />
      <nav>
        <NavLink
          to={ROOT}
          className={({ isActive }) => (isActive ? 'nav__item--active nav__item' : 'nav__item')}
        >
          Home
        </NavLink>
        <NavLink
          to={ACHIEVEMENTS}
          className={({ isActive }) => (isActive ? 'nav__item--active nav__item' : 'nav__item')}
        >
          Achievements
        </NavLink>
        <NavLink
          to={SETTINGS}
          className={({ isActive }) => (isActive ? 'nav__item--active nav__item' : 'nav__item')}
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
