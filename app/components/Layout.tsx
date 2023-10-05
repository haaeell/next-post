import React from 'react';
import Navbar from './Navbar';

function Layout({ children }:any) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;