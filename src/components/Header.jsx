import React from 'react';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

export const Header = () => {
  return (
    <>
      <header className="absolute">
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
