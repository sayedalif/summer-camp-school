import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';

const usePaymentClasses = () => {
  const { user } = useAuth();
  const [axiosPublic] = useAxiosPublic();

  const { data: paymentClass = [], isLoading, error, refetch } = useQuery({
    enabled: !!user,
    queryKey: ['paymentClasses'],
    queryFn: async () => {
      const response = await axiosPublic(`/payments/classes?email=${user?.email}`);
      const data = await response.data;
      return data;
    }
  });
  return { paymentClass, isLoading, error, refetch };
};

export default usePaymentClasses;