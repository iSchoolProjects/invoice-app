import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sharedSlice} from '../store/slices/shared.slice';

export default function Sidebar() {
  const {isDarkTheme, isSidebarHidden} = useSelector((state) => state.shared);
  const dispatch = useDispatch();
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap', '+ Create New Board'];

  const toggleTheme = () => {
    localStorage.setItem('isDark', !isDarkTheme);
    dispatch(sharedSlice.actions.toggleTheme());
  };
  const toggleSidebar = () => {
    localStorage.setItem('isSidebarHidden', !isSidebarHidden);
    dispatch(sharedSlice.actions.toggleSidebar());
  };

  return (
    <>
      <input type="checkbox" name="sidebar" id="sidebar" checked={isSidebarHidden} onChange={toggleSidebar} />
      <label htmlFor="sidebar">
        <img src="/assets/eye-icon.svg" alt="" />
      </label>
      <div className="sidebar">
        <h5>ALL BOARDS</h5>
        <div className="section">
          <div>
            {boards.map((board) => (
              <div key={board} className="board">
                <img src="/assets/board-icon.svg" alt="" />
                <p>{board}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="switch-input">
              <img src="/assets/sun.svg" alt="" />
              <div className="switch">
                <input type="checkbox" id="switch" checked={isDarkTheme} onChange={toggleTheme} />
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

/**
 * 
krecemo od shared 
u inicijalne vr shared slice dodati vr is side bar hidden i dodati joj vr false
napravi u reduceru shared slice 2 f-ije 
prva f-ija je toggle sidebar koja treba da togluje isSidebarhidden
druga f-ija setSideBarHidden koja treba da setuje sidebar state na vr koju dobije
na inicijalno ucitavanje aplikacije procitati vr iz locale st koji se zove isSideBarHidden
i pozvati f-iju setSideBarHidden i proslediti joj argument iz locale st
input polje koje kontrolise da li je sidebar sakriven proslediti trenutnu vr iz IsSidebarHidden 
na inputu imamo changeHandler koji ce pozivati f-iju toggleSideBar i setovati u locale st
*/
