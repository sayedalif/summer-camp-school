import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCurriculum = () => {
  const [axiosPublic] = useAxiosPublic();

  const { data: curriculum = [], isLoading } = useQuery({
    queryKey: ['curriculum'],
    queryFn: async () => {
      const response = await axiosPublic('/curriculum');
      const data = response.data;
      return data;
    },
    refetchOnWindowFocus:false,
  })
  return {
    curriculum,
    isLoading
  }
};

export default useCurriculum;