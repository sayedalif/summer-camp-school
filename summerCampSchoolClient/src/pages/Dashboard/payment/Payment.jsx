import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';
import useCart from '../../../hooks/useCart';
import './payment.css';

const Payment = () => {
  const { carts, error, isLoading, refetch, totalPrice } = useCart();
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice} carts={carts} cartRefetch={refetch} />
      </Elements>
    </div>
  );
};

export default Payment;