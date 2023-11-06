import React from 'react';
import {Route, Routes} from 'react-router';
// import Home from './components/Home';
import NewDashboard from './components/NewDashboard';
// import Dashboard from './components/Dashboard';
import EditDashboard from './components/EditDashboard';
// import ColumnDashboard from './components/ColumnDashboard';
import EditColumnDashboard from './components/EditColumnDashboard';
// import Task from './components/Task';
import NewTaskDashboard from './components/NewTaskDashboard';
import EditTaskDashboard from './components/EditTaskDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new-dashboard" element={<NewDashboard />} />
      <Route path="/dashboard/:id" element={<h1>Dashboard</h1>} />
      <Route path="/dashboard/:id/edit" element={<EditDashboard />} />
      <Route path="/dashboard/:id/column/:columnId" element={<h1>ColumnDashboard</h1>} />
      <Route path="/dashboard/:id/column/:columnId/edit" element={<EditColumnDashboard />} />
      <Route path="/dashboard/:id/column/:columnId/task/:taskId" element={<h1>Task </h1>} />
      <Route path="/new-task-dashboard/:id/column/:columnId/task" element={<NewTaskDashboard />} />
      <Route path="/edit-task-dashboard/:id/column/:columnId/task/:taskId/edit" element={<EditTaskDashboard />} />
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
