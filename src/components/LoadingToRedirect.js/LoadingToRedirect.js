import React from 'react';
// import { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

const LoadingToRedirect = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h1>
        {/* Loading Dashboard... <br /> You might not have logged in your account
        yet. <br /> If it is taking too long, try{' '}
        {<NavLink to="/login">logging in</NavLink>} again! */}
        Loading...
      </h1>
    </div>
  );
};

export default LoadingToRedirect;
