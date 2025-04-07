import React, { useEffect, useState } from "react";
import AddToCart from "../components/addToCart/AddToCart";
import CartEmpty from "../components/addToCart/CartEmpty";
import baseApi from "../api/axiosInstance";


const Bag = () => {
  const [cartItems, setCartItems] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await baseApi.get(`/cart/${userId}`);
        const items = response?.data?.cart?.items || [];
        setCartItems(items);
      } catch (error) {
        console.error("Failed to fetch cart", error);
        setCartItems([]); // fallback to empty
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchCart();
    }
  }, [userId]);

  

  return (
    <section className="mt-[100px] w-[980px] w-full flex justify-center border-gray-200 bag-section">
      {cartItems.length === 0 ? <CartEmpty /> : <AddToCart />}
    </section>
  );
};

export default Bag;
