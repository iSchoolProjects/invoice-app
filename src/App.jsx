import {Route, Routes, useNavigate} from 'react-router';
import Boards from './components/Boards';
import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {sharedSlice} from './store/slices/shared.slice';
import Layout from './components/Layout';

// import Home from './components/Home';
// import NewDashboard from './components/NewDashboard';
// import Dashboard from './components/Dashboard';
// import EditDashboard from './components/EditDashboard';
// import ColumnDashboard from './components/ColumnDashboard';
// import EditColumnDashboard from './components/EditColumnDashboard';
// import Task from './components/Task';
// import NewTaskDashboard from './components/NewTaskDashboard';
// import EditTaskDashboard from './components/EditTaskDashboard';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('isDark'));
    const isSidebarHidden = JSON.parse(localStorage.getItem('isSidebarHidden'));
    dispatch(sharedSlice.actions.setTheme(isDark));
    dispatch(sharedSlice.actions.setSidebarHidden(isSidebarHidden));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/new-dashboard" element={<h1>NewDashboard</h1>} />
        <Route path="/dashboard/:id" element={<Boards />} />
        <Route path="/edit-dashboard/:id" element={<h1>EditDashboard</h1>} />
        <Route path="/dashboard/:id/column" element={<h1>ColumnDashboard</h1>} />
        <Route path="/dashboard/:id/column/:columnId/edit" element={<h1>EditColumnDashboard</h1>} />
        <Route path="/dashboard/:id/column/:columnId/task/:taskId" element={<h1>Task </h1>} />
        <Route path="/dashboard/:id/column/:columnId/task" element={<h1>NewTaskDashboard</h1>} />
        <Route path="/dashboard/:id/column/:columnId/task/:taskId/edit" element={<h1>EditTaskDashboard</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
