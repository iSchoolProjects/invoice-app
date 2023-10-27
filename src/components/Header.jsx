import React from 'react';

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="/assets/logo.svg" alt="" />
        </div>
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
