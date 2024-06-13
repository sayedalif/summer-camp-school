import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';
import './payment.css';
import CheckOutForm from './CheckOutForm.jsx';

const Payment = () => {
  const { carts, error, isLoading, refetch, totalPrice } = useCart();
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm totalPrice={totalPrice} carts={carts} cartRefetch={refetch} />
      </Elements>
    </div>
  );
};

export default Payment;