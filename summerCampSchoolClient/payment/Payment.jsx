import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckOutForm';
import useCart from '../src/hooks/useCart';

const Payment = () => {
  const { carts, error, isLoading, refetch, totalPrice } = useCart();
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice} />
      </Elements>
    </div>
  );
};

export default Payment;