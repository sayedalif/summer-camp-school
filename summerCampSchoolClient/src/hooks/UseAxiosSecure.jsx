import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`
});

const useAxiosSecure = () => {

  const { signOut, loading } = useContext(AuthContext);
  const navigate = useNavigate()


  useEffect(() => {
    axiosSecure.interceptors.request.use(config => {
      // trying to access the jwt token here by using localStorage.getItem('access-token')
      const token = localStorage.getItem('access-token');

      console.log("🚀 ~ file: useAxiosSecure.jsx:19 ~ useEffect ~ token:", token); // returned undefined

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await signOut()
          navigate('/login');
        }
        return Promise.reject(error)
      }
    )
  }, [signOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;