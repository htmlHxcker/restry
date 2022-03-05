import React from 'react';
import './navbar.scss';

function NavBar() {
  return (
    <header className="flex justify-between items-center navbar-background">
      <h1 className="heading-1">Restry</h1>
      <nav>
        <li className="nav-item">
          Home
        </li>
        <li className="nav-item">Tasks</li>
        <li className="nav-item">Achievement</li>
      </nav>
    </header>
  );
}

export default NavBar;
