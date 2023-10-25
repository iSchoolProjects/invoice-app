import React from "react";

export default function Header() {
  return (
    <>
      <div className="rectangle"></div>
      <div className="header">
        <h2>Platform Launch</h2>
        <div>
          <button>+ Add New Task</button>
          <img src="/assets/dots.svg" alt="" />
        </div>
      </div>
    </>
  );
}
