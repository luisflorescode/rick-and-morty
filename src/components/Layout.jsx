import React from 'react';
import Header from './Header';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    {children}
  </div>
);

export default Layout;
