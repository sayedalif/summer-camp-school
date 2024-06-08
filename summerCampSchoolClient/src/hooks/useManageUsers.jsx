import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";

const useManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: allUsers = [], isLoading, error, refetch } = useQuery(
    {
      queryKey: ["allUsers"],
      queryFn: async () => {
        const response = await axiosSecure.get("/users");
        const data = await response?.data;
        return data;
      }
    }
  );
  return { allUsers, isLoading, error, refetch };
};

export default useManageUsers;