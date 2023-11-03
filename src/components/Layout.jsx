import React from 'react';
import {Outlet} from 'react-router';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Header />
        <Sidebar />
        <div className="rigth">
          <Outlet />
        </div>
      </div>
    </>
  );
}
