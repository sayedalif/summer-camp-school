import React from 'react';
import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    enabled: !!user,
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(res.data);
      return res.data?.admin;
    }
  });


  return [isAdmin, isAdminLoading];
};

export default useAdmin;