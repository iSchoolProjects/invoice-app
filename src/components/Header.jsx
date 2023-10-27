import React from "react";
import { Logo } from "./icons/Logo";

export default function Header(theme) {
  return (
    <>
      <div className="header">
        <div className="logo">{<Logo />}</div>
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
