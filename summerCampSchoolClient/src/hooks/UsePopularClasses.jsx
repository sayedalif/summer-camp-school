import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UsePopularClasses = () => {
  const [axiosPublic] = useAxiosPublic();

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const response = await axiosPublic('/classes');
      const data = response.data;
      return data;
    },
    refetchOnWindowFocus:false,
  })
  return {
    classes,
    isLoading
  }
};

export default UsePopularClasses;