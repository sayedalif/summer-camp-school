import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './UseAxiosSecure';

const useCart = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { isLoading, data: carts = [], refetch, error, } = useQuery({
    enabled: !!user && !loading,
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user?.email}`);
      const data = await response?.data;
      return data;
    },
  });
  const totalPrice = parseFloat(carts?.reduce((sum, item) => sum + item.price, 0)).toFixed(2);

  return { carts, error, isLoading, refetch, totalPrice };
};

export default useCart;