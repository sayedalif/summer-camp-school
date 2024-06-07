import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './UseAxiosSecure';

const usePaymentClasses = () => {
  const { user } = useAuth();
  // const [axiosPublic] = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentClass = [], isLoading, error, refetch } = useQuery({
    enabled: !!user,
    retry:3,
    
    queryKey: ['paymentClasses'],
    queryFn: async () => {
      const response = await axiosSecure(`/payments/classes?email=${user?.email}`);
      const data = await response.data;
      return data;
    }
  });
  return { paymentClass, isLoading, error, refetch };
};

export default usePaymentClasses;