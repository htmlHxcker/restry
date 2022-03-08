import React from 'react';
import { NavLink } from 'react-router-dom';
import { ACHIEVEMENTS, ROOT, SETTINGS } from '../../navigation/CONSTANTS';
import './navbar.scss';

function NavBar() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="logo">Restry</h1>
      <nav>

        <NavLink to={ROOT} className={({ isActive }) => (isActive ? 'nav-item-active nav-item' : 'nav-item')}>Home</NavLink>
        <NavLink to={ACHIEVEMENTS} className={({ isActive }) => (isActive ? 'nav-item-active nav-item' : 'nav-item')}>
          Achievements
        </NavLink>
        <NavLink to={SETTINGS} className={({ isActive }) => (isActive ? 'nav-item-active nav-item' : 'nav-item')}>Settings</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
