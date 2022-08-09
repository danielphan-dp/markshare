import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js/PrivateRoute';
import { AuthProvider } from './context/auth';
import { TaskProvider } from './context/task';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LogInPage from './pages/LogInPage/LogInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import Error404 from './pages/Errors/Error404/Error404';
import Dashboard from './pages/Dashboard/Dashboard';
import TasksPage from './pages/TasksPage/TasksPage';
import NavBar from './components/Navigation/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <NavBar />
          <Toaster toastOptions={{ duration: 3000 }} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/login" element={<LogInPage />} />
            <Route
              exact
              path="forgot-password"
              element={<ForgotPasswordPage />}
            />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="" element={<Dashboard />} />
              <Route path="tasks" element={<TasksPage />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
