import React from 'react';
import { IoMdStats } from 'react-icons/io';
import { HiOutlineUser } from 'react-icons/hi';

function NavBar() {
  return (
    <header className="flex justify-between items-center navbar-background">
      <h1>Restry</h1>
      <div className="flex">
        <IoMdStats size={30} />
        <HiOutlineUser size={30} />
      </div>
    </header>
  );
}

export default NavBar;
