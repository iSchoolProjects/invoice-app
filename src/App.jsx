import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import {useDispatch} from 'react-redux';
import {sharedSlice} from './store/slices/shared.slice';

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
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new-dashboard" element={<h1>NewDashboard</h1>} />
        <Route path="/dashboard/:id" element={<h1>Dashboard</h1>} />
        <Route path="/edit-dashboard/:id" element={<h1>EditDashboard</h1>} />
        <Route path="/dashboard/:id/column/:columnId" element={<h1>ColumnDashboard</h1>} />
        <Route path="/dashboard/:id/column/:columnId/edit" element={<h1>EditColumnDashboard</h1>} />
        <Route path="/dashboard/:id/column/:columnId/task/:taskId" element={<h1>Task </h1>} />
        <Route path="/new-task-dashboard/:id/column/:columnId/task" element={<h1>NewTaskDashboard</h1>} />
        <Route path="/edit-task-dashboard/:id/column/:columnId/task/:taskId/edit" element={<h1>EditTaskDashboard</h1>} />
      </Routes>
    </>
  );
}

export default App;
