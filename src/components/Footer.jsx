import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__made'>
      Made with
      {' '}
      <span role='img' aria-label='heart'>💜</span>
      {' '}
      by
      <a
        href='https://luisflores.dev/'
        rel='noopener noreferrer'
        target='_blank'
        className='logo'
      >
        <span className='logo-img'>&lt;&gt;</span>
        {' '}
        <span>Luis Flores</span>
      </a>
    </div>
    <div className='footer__location'>
      CD
      <span>MX</span>
      , 2019
    </div>
  </footer>
);

export default Footer;
