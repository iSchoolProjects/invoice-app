import React from 'react';
import {Outlet} from 'react-router';
import Sidebar from './Sidebar';
import Header from './Header';
import {useNavigation} from '../hooks/navigation';

export default function Layout() {
  const {isSidebarHidden} = useNavigation();
  return (
    <>
      <div className="layout">
        <Header />
        <Sidebar />
        <div className="rigth" data-full-width={isSidebarHidden}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
