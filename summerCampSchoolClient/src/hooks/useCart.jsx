import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useCart = () => {

  const [axiosPublic] = useAxiosPublic();
  const { user, loading } = useAuth();
  const { isLoading, data, refetch, error, } = useQuery({
    enabled: !!user && !loading,
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await axiosPublic.get('/cart');
      const data = await response?.data;
      return data;
    },
  });
  return { data, error, isLoading, refetch };
};

export default useCart;