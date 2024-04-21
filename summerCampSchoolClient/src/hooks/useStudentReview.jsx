import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useStudentReview = () => {
  const [axiosPublic] = useAxiosPublic();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const response = await axiosPublic('/reviews');
      const data = response.data;
      return data;
    },
    refetchOnWindowFocus: false,
  })
  return {
    reviews,
    isLoading
  }
};

export default useStudentReview;