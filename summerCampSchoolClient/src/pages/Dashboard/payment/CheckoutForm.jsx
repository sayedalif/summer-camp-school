import { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ totalPrice, carts }) => {
  // user
  const { user } = useAuth();
  const price = parseFloat(totalPrice);
  // for error messages
  const [cardError, setCardError] = useState('');

  // client secret
  const [clientSecret, setClientSecret] = useState('');
  // console.log("🚀 ~ CheckoutForm ~ clientSecret:", clientSecret);
  // card processing loading information
  const [processing, setProcessing] = useState(false);

  // transection id
  const [transactionId, setTransactionId] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  // creating payment intend on the database
  useEffect(() => {
    // if the price is greater than 0 than make a payment intend
    if (price > 0) {
      axios.post('http://localhost:5000/create-payment-intent', { price }).then(response => {
        console.log(response?.data);
        setClientSecret(response?.data?.clientSecret);
      })
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // emptying the old error messages
    setCardError('');
    // setting the loading true so that user does not click over and over again to make payment
    setProcessing(true);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error?.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      `${clientSecret}`,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown',
          },
        },
      },
    );
    // making this false will make the user to click the button again to make payment
    setProcessing(false);

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError?.message);
    }
    console.log('paymentIntent', paymentIntent);

    if (paymentIntent?.status === 'succeeded') {
      console.log(['transaction id'], paymentIntent?.id);
      setTransactionId(paymentIntent?.id);

      // after successful payment send payment info to database
      const payment = {
        email: user?.email,
        transactionId: paymentIntent?.id,
        totalPrice: price,
        purchaseDate: new Date(),
        classes_id: carts?.map(cart => cart?.class_id),
        carts_id: carts?.map(cart => cart?._id),
      };
      axios.post('http://localhost:5000/payment', { payment }).then(response => {
        console.log(response.data);
      })
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl py-3 px-3'>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          {
            cardError && <p className='text-red-500 text-lg font-bold'>{cardError}</p>
          }
          {transactionId && <p className='text-xl'>Transaction Id: <span className='text-green-500'>{transactionId}</span>
          </p>}
          <button type="submit" className='btn btn-primary btn-sm' disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;