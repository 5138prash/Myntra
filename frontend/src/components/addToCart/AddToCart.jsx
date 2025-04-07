import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseApi from "../../api/axiosInstance";

const AddToCart = () => {
  // Fetch the cart items from Redux store
  const [carts, setCarts] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log("Line 11: ", carts)



  const handleOrder = async () => {
  if (!userId || carts.length === 0) {
    toast.error("Cart is empty or user not found.");
    return;
  }

  const orderPayload = {
    user: userId,
    items: carts.map((item) => ({
      product: item.product._id,
      quantity: item.quantity || 1,
    })),
    totalAmount: getTotalPrice(carts),
  };

  try {
    const response = await baseApi.post("/order", orderPayload, {
      withCredentials: true,
    });

    if (response.status === 201) {
      toast.success("Order created successfully!");

      // 👉 Clear the cart after successful order
      await baseApi.delete(`/cart/clear/${userId}`);

      // Navigate to order page
      navigate("/order");
    } else {
      toast.error("Order creation failed!");
    }
  } catch (error) {
    console.error("Order Error:", error);
    toast.error("Something went wrong while placing the order.");
  }
};


  useEffect(() => {
    if (!userId) return;
    const fetchCart = async () => {
      try {
        const response = await baseApi.get(`/cart/${userId}`);
        // Check the structure of the response
        const cartItems = response?.data?.cart?.items || [];
        setCarts(cartItems);
      } catch (error) {
        console.error("Failed to fetch cart", error);
        setCarts([]); // fallback to empty array
      }
    };

    fetchCart();
  }, [userId]);

  const navigate = useNavigate();

  // Function to calculate total MRP of all items in cart
  const getTotalMrp = (list) => {
    return list.reduce((total, item) => {
      const mrp =
        parseFloat(item.product?.mrp) || // if `mrp` is string
        parseFloat(item.product?.MRP) || // if `MRP` is string
        parseFloat(item.product?.price) || // fallback to price if no MRP
        0;
      return total + mrp * (item.quantity || 1);
    }, 0);
  };

  const getTotalPrice = (list) => {
    return list.reduce((total, item) => {
      const price = parseFloat(item.product?.price) || 0;
      return total + price * (item.quantity || 1);
    }, 0);
  };

  const getTotalDiscount = (list) => {
    return getTotalMrp(list) - getTotalPrice(list);
  };

  // Function to handle removing all items from cart and placing order
  let HandleRemoveItem = () => {};

  return (
    <div className="main-addtocart">
      <div className="flex bag-addtocart gap-6 py-3">
        {/* Cart Items Section */}
        <div className="addToCart-items lg:max-h-[700px] overflow-hidden overflow-y-scroll">
          {carts.map((data, index) => (
            <Cart
              key={index}
              data={data.product}
              onRemove={() => handleRemove(data.product)}
            />
          ))}
        </div>

        {/* Price Details Section */}
        {carts.length > 0 ? (
          <div className="price-list-section w-[300px] h-[700px] shadow-[-1px_0px_5px_rgba(0,0,0,0.05)] text-gray-600 ">
            <div className="price-detail-header px-5 py-2">
              <h1 className="uppercase font-bold text-[12px] text-gray-500">
                Price Details ({carts.length})
              </h1>
            </div>

            {/* Price Breakdown */}
            <div className="price-detail-amount py-3">
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp">Total MRP</span>
                <span className="mrp-amount capitalize">
                  ₹{getTotalMrp(carts)}
                </span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp">Discount on MRP</span>
                <span className="mrp-amount text-[#03a685]">
                  -₹{getTotalDiscount(carts)}
                </span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px] ">
                <span className="mrp">Coupon Discount</span>
                <span className="mrp-amount text-[#ff3f6c]">Apply Coupon</span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp">Platform Fee</span>
                <span className="mrp-amount text-[#03a685]">Free</span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp ">Shipping Fee</span>
                <span className="mrp-amount text-[#03a685]">Free</span>
              </div>
            </div>

            {/* Total Amount and Place Order Button */}
            <div className="w-full all-credits px-5">
              <div className="border-t-1 border-gray-200">
                <div className="w-full flex justify-between text-[15px] py-2 font-bold">
                  <span>Total Amount</span>
                  <span>₹{getTotalPrice(carts)}</span>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => {
                      handleOrder();
                      toast.success("Ordered Successfully Added!");
                      // navigate("/order");
                    }}
                    className="bg-[#ff3f6c] hover:bg-[#ff3f6c]/90 w-full py-1 text-white uppercase text-center font-bold text-[14px]"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default AddToCart;
