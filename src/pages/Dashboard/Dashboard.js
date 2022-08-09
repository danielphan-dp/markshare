import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Link className="btn btn-outline-primary btn-lg" to="/dashboard/tasks">
        Go to Tasks
      </Link>
    </div>
  );
};

export default Dashboard;
