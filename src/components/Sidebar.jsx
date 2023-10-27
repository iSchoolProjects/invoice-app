import React, { useState, useEffect } from "react";
import { Logo } from "./icons/Logo";

export default function Sidebar() {
  const boards = [
    "Platform Launch",
    "Marketing Plan",
    "Roadmap",
    "+ Create New Board",
  ];

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <input type="checkbox" name="sidebar" id="sidebar" />
      <label htmlFor="sidebar">
        <img src="/assets/eye-icon.svg" alt="" />
      </label>
      <div className="sidebar">
        <h5>ALL BOARDS</h5>
        <div className="section">
          <div>
            {boards.map((board) => (
              <>
                <div className="board">
                  <img src="/assets/board-icon.svg" alt="" />
                  <p>{board}</p>
                </div>
              </>
            ))}
          </div>
          <div>
            <div className="switch-input">
              <img src="/assets/sun.svg" alt="" />
              <div className="switch">
                <input
                  type="checkbox"
                  id="switch"
                  checked={theme !== "light"}
                  onChange={toggleTheme}
                />
                <label htmlFor="switch">
                  <span></span>
                </label>
              </div>
              <img src="/assets/moon.svg" alt="" />
            </div>

            <label htmlFor="sidebar">
              <img src="/assets/eye-slash.svg" alt="" />
              <h5>Hide Sidebar</h5>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
