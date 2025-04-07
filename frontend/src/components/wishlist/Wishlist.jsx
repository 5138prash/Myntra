import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import WishlistEmpty from './WishlistEmpty';
import baseApi from '../../api/axiosInstance';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await baseApi.get(`/wishlist/${localStorage.getItem("userId")}`, {
          withCredentials: true,
        });
        const products = res.data?.wishlist?.products || [];
        setWishlistItems(products);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <section className='wishlist-section pb-[20px] mt-[100px] mx-[150px]'>
      <h1 className='items-number p-4 uppercase'>
        My Wishlist <span className='text-[#ff3e6c] font-bold'>{wishlistItems.length} items</span>
      </h1>

      <div className='flex flex-wrap justify-center gap-10'>
        {wishlistItems.map((data, index) => (
          <Card data={data} key={index} wishlistItems={wishlistItems} />
        ))}
      </div>

      {wishlistItems.length === 0 && <WishlistEmpty />}
    </section>
  );
};

export default Wishlist;
