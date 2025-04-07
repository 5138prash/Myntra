import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook for routing
import { GrCart } from "react-icons/gr";  // Importing Cart icon from react-icons

const WishlistEmpty = () => {
  const navigate = useNavigate();  // Initializing useNavigate for navigation functionality

  return (
    <section className='empty-wishlist w-full flex flex-col items-center relative'>
      {/* Wishlist Empty Grid Container */}
      <div className='w-[450px] empty-wishlist-grid'>
        <div className='flex flex-col items-center py-5 px-8 gap-2'>
          {/* Empty Wishlist Heading */}
          <h1 className='empty-whishlist-heading font-bold text-2xl uppercase text-gray-600'>
            Your Wishlist is Empty
          </h1>
          
          {/* Description Text */}
          <p className='desc px-4 w-[400px] text-[18px] text-gray-600 text-center'>
            Add items that you like to your wishlist. Review them anytime and easily move them to the bag.
          </p>
          
          {/* Cart Icon */}
          <div className='w-full cart-icon items-center justify-center flex text-gray-300 text-[100px] px-2 py-4'>
            <GrCart />
          </div>

          {/* Continue Shopping Button */}
          <div className='w-full flex items-center justify-center'>
            <button
              onClick={() => navigate('/')}  // Navigate to the home page
              className='cursor-pointer border-1 border-blue-600 px-4 py-2 font-bold text-blue-600 w-3/5 rounded text-[18px] uppercase'>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishlistEmpty;
