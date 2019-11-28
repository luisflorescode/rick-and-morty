import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/images/logo.png';

const Header = () => (
  <header className='header'>
    <figure className='header__logo'>
      <img className='header__logo-img' src={Logo} alt='Rick and Morty Logo' />
    </figure>
    <nav className='header__nav'>
      <ul className='header__nav__options'>
        <li className='header__nav__options-item'>
          <Link to='/'>Characters</Link>
        </li>
        <li className='header__nav__options-item'>
          <Link to='/favorites'>Favorites</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
