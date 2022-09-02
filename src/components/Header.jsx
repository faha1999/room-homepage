import React from 'react';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

export const Header = () => {
  return (
    <>
      <header className="absolute z-10 p-8 w-full flex items-center justify-center lg:items-center lg:justify-start">
        <div>
          <img src={logo} alt="room" />
        </div>

        <nav></nav>

        <div>
          <button>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </header>
    </>
  );
};
