import React, { useEffect, useState } from "react";
import Cart from "../components/cart/Cart"; // Import Cart component
import baseApi from "../api/axiosInstance";
import Cookies from "js-cookie";
const Orders = () => {
  // Fetch orders from the Redux store
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const response = await baseApi.get(`/order`);
        const userOrders = response.data.orders;
        setOrder(userOrders); // set all orders, not just first
      } catch (error) {
        console.log(error);
      }
    };
    getAllOrders();
  }, []);
  
  return (
    <section className="order-section mt-[129px] px-20px  w-full min-h-[700px]">
  <div className="px-10 max-h-[700px] overflow-x-auto">
    <h1 className="text-center font-semibold py-2">Confirm Orders</h1>

    {order.length === 0 ? (
      <p className="text-center text-gray-500">No orders found.</p>
    ) : (
      order.map((orderObj, i) => (
        <div key={i} className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="font-bold text-lg mb-2">Order #{i + 1}</h2>
          {orderObj.items.map((data, j) => (
            <Cart
              key={j}
              data={data.product}
              quantity={data.quantity}
              onRemove={() => {}} // or leave it out if not needed
            />
          ))}
        </div>
      ))
    )}
  </div>
</section>

  );
};

export default Orders;
