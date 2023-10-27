import React from 'react';
import {Logo} from './icons/Logo';
import {useSelector} from 'react-redux';

export default function Header(theme) {
  const {isDarkTheme} = useSelector((state) => state.shared);

  return (
    <>
      <div className="header">
        <div className="logo">{<Logo text={isDarkTheme ? '#ffffff' : undefined} />}</div>
        <div className="header-title">
          <h2>Platform Launch</h2>
          <div className="btn-section">
            <button>+ Add New Task</button>
            <img className="dots" src="/assets/dots.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
