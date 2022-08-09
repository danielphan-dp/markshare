import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import LoadingToRedirect from '../LoadingToRedirect.js/LoadingToRedirect';
import axios from 'axios';

const PrivateRoute = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(`/auth-check`);
      if (!data.ok) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };
    if (auth) {
      authCheck();
    }
  }, [auth]);
  return loading ? <LoadingToRedirect /> : <Outlet />;
};

export default PrivateRoute;
