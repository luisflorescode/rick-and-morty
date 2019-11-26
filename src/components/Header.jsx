import React from 'react';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/images/logo.png';

const Header = () => (
  <header className="header">
    <figure className="header__logo">
      <img className="header__logo-img" src={Logo} alt="Rick and Morty Logo" />
    </figure>
    <nav className="header__nav">
      <ul className="header__nav__options">
        <li className="header__nav__options-item">Characters</li>
        <li className="header__nav__options-item">Favorites</li>
      </ul>
    </nav>
  </header>
);

export default Header;
