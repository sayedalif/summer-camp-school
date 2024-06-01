import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const PaymentHistory = () => {

  const [axiosPublic] = useAxiosPublic();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [payments, setPayments] = useState([]);
  console.log("🚀 ~ PaymentHistory ~ payments:", payments);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosPublic(`/payments?email=${user?.email}`);
        const data = await response?.data;
        setPayments(data);
        console.log(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosPublic, user]);

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <></>
  );
};

export default PaymentHistory;