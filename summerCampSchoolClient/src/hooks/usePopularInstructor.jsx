import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePopularInstructor = () => {
  const [axiosPublic] = useAxiosPublic();
  const { data: popularInstructors = [], isLoading } = useQuery({
    queryKey: ['popularInstructors'],
    queryFn: async () => {
      const response = await axiosPublic('/popularinstructor');
      const data = response.data;
      return data;
    },
    refetchOnWindowFocus:false,
  })
  return {
    popularInstructors,
    isLoading
  }
};

export default usePopularInstructor;