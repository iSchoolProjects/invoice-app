import React, {useState} from 'react';
import {Logo} from './icons/Logo';
import {useNavigation} from '../hooks/navigation';
import {useLocation, useNavigate, useParams} from 'react-router';

export default function Header(theme) {
  const {boards, toggleTheme, isDarkTheme} = useNavigation();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const {id} = useParams();
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleDropdown = () => {
    setDropdownMenu((prev) => !prev);
  };
  const handleClose = () => {
    setDropdownMenu(false);
  };
  return (
    <>
      <div className="header">
        <div className="logo">{<Logo text={isDarkTheme ? '#ffffff' : undefined} />}</div>
        <img className="mobile-logo" src="/assets/rectangles-logo.svg"></img>
        <div className="header-title">
          <h2 className="active-board" onClick={handleDropdown}>
            {id ?? pathname?.split('/').at(0).replace('-', ' ')}
          </h2>
          <img data-dropdown-menu={dropdownMenu} className="arrow" src="/assets/arrow-down.svg"></img>
          <div className="btn-section">
            <button>+ Add New Task</button>
            <img className="mobile-btn" src="/assets/mobile-btn.svg"></img>
            <img className="dots" src="/assets/dots.svg" alt="" />
          </div>
        </div>
      </div>

      {/**mobile */}
      {dropdownMenu && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal" id="myModal">
            <div className="sidebar-mobile">
              <h5>ALL BOARDS</h5>
              <div className="section">
                <div>
                  {boards.map((board) => (
                    <div key={board} className={`board ${board === id ? 'active' : ''}`} onClick={() => navigate('/dashboard/' + board)}>
                      <img src="/assets/board-icon.svg" alt="" />
                      <p>{board}</p>
                    </div>
                  ))}
                  <div key={'board'} className="board" onClick={() => navigate('/new-dashboard')}>
                    <img src="/assets/purple-board-icon.svg" alt="" />
                    <p>+ Create New Board</p>
                  </div>
                </div>
                <div>
                  <div className="switch-input" onClick={(e) => e.stopPropagation()}>
                    <img src="/assets/sun.svg" alt="" />
                    <div className="switch">
                      <input type="checkbox" id="switch" checked={isDarkTheme} onChange={toggleTheme} />
                      <label htmlFor="switch">
                        <span></span>
                      </label>
                    </div>
                    <img src="/assets/moon.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
