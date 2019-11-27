import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
