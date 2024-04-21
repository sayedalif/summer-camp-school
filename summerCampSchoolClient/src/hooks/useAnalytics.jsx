import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAnalytics = () => {
  const [axiosPublic] = useAxiosPublic();
  const { data: stats = [], isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await axiosPublic('/stats');
      const data = response.data;
      return data;
    },
    refetchOnWindowFocus:false,
  })
  return {
    stats,
    isLoading
  }
};

export default useAnalytics;