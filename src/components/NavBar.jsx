import React from 'react';
import { IoMdStats } from 'react-icons/io';
import { HiOutlineUser } from 'react-icons/hi';

function NavBar() {
  return (
    <div className="flex justify-between items-center blur-background">
      <h1>Restry</h1>
      <div className="flex">
        <IoMdStats size={30} />
        <HiOutlineUser size={30} />
      </div>
    </div>
  );
}

export default NavBar;
