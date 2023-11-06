import React from 'react';
import {Route, Routes, useNavigate} from 'react-router';
import Boards from './components/Boards';
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
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new-dashboard" element={<h1>NewDashboard</h1>} />
      <Route path="/dashboard/:id" element={<Boards />} />
      <Route path="/edit-dashboard/:id" element={<h1>EditDashboard</h1>} />
      <Route path="/dashboard/:id/column" element={<h1>ColumnDashboard</h1>} />
      <Route path="/dashboard/:id/column/:columnId/edit" element={<h1>EditColumnDashboard</h1>} />
      <Route path="/dashboard/:id/column/:columnId/task/:taskId" element={<h1>Task </h1>} />
      <Route path="/dashboard/:id/column/:columnId/task" element={<h1>NewTaskDashboard</h1>} />
      <Route path="/dashboard/:id/column/:columnId/task/:taskId/edit" element={<h1>EditTaskDashboard</h1>} />
    </Routes>
  );
}

export default App;

// Homepage /
// New Dashboard /dashboard
// Dashboard /dashboard/:id
// Edit Dashboard /dashboard/:id/edit
// Column /dashboard/:id/column
// Column /dashboard/:id/column/:id/edit
// Task /dashboard/:id/column/:id/task/:id
// New Task dashboard/:id/column/:id/task/
// Edit Task dashboard/:id/column/:id/task/:id/edit
