'use client'
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const ErrorStripe = () => {
  const { handleCartClick } = useShoppingCart();

  return (
    <div className="flex items-center justify-center h-screen -mt-28 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-red-500">Oops! Something went wrong...</h2>
        <p className="text-base mb-6">We apologize for the inconvenience. Please try again later.</p>
        <button
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
          onClick={() => handleCartClick()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorStripe;
