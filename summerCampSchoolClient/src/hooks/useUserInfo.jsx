import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import axios from "axios";
import useAxiosSecure from "./UseAxiosSecure";

// * this is for getting users info from the database

const useUserInfo = () => {
  // const [axiosPublic] = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();
  // getting the logged in user from auth
  const { user } = useAuth();

  const { data, error, isLoading, refetch, } = useQuery({
    enabled: !!user,
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await axiosSecure(`/users/${user?.email}`,);
      const data = await response?.data;
      return data;
    }
  });
  return { data, error, isLoading, refetch };
};

export default useUserInfo;
