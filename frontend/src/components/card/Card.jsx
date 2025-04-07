import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import baseApi from "../../api/axiosInstance";

const Card = ({ data, wishlistItems = [] }) => {

  // Function to handle adding item to cart
  const handleCart = async () => {
    try {
      const payload = {
        user: localStorage.getItem("userId"), // ya jo bhi tu user identify karne ke liye use kar raha
        product: data._id, // product ID
        quantity: 1, // default quantity 1
        selectedSize: data.sizes?.[0] || "M", // default size
        selectedColor: data.colors?.[0] || "Black", // default color
      };

      const res = await baseApi.post("/cart", payload);

      if (res.status === 200) {
        toast.success("Item added to cart!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add to cart");
    }
  };
  const [isWishlisted, setIsWishlisted] = useState(false);
  // Function to handle adding/removing item from wishlist
  const handleWishlist = async () => {
    try {
      const payload = {
        user: localStorage.getItem("userId"),
        products: data._id,
      };

      const res = await baseApi.post("/wishlist", payload, {
        withCredentials: true,
      });

      if (res.status === 200) {
        setIsWishlisted(true); // ✅ Update local state
        toast.success("Added to wishlist!");
      }
    } catch (err) {
      console.error("Wishlist error:", err);
      toast.error("Failed to add to wishlist");
    }
  };

  const removeWishlist = async () => {
    try {
      const payload = {
        user: localStorage.getItem("userId"),
        products: data._id,
      };

      const res = await baseApi.delete("/wishlist/remove", {
        data: payload,
        withCredentials: true,
      });

      if (res.status === 200) {
        setIsWishlisted(false); // ✅ Update local state
        toast.success("Removed from wishlist");
        if (location.pathname === "/wishlist") {
          window.location.reload(); // OR trigger callback
        }
      }
    } catch (error) {
      console.error("Remove wishlist error:", error);
      toast.error("Failed to remove from wishlist");
    }
  };

  const moveToBag = async () => {
    try {
      await handleCart();         
      await removeWishlist();     
    } catch (err) {
      console.error("Move to bag error", err);
      toast.error("Failed to move item to bag");
    }
  };
  
  useEffect(() => {
    const found = wishlistItems.some((item) => item._id === data._id);
    setIsWishlisted(found);
  }, [wishlistItems, data._id]);

  const isInWishlist = wishlistItems.some((item) => item._id === data._id);

  const location = useLocation();

  return (
    <section className="relative cursor-pointer card w-[210px] h-[390px] hover:shadow-[-1px_-2px_15px_rgba(0,0,0,0.2)] rounded pv-2 group">
      {/* Product Image Section */}
      <div className="relative product-img w-full h-[280px]">
        <div className="w-full h-full">
          <img src={data.images[0]} className="w-full h-full object-cover" />
        </div>
        {/* Rating Display */}
        <div
          className={`rating ${
            location.pathname === "/wishlist" ? "hidden" : ""
          } absolute opacity-100 group-hover:opacity-0 transition-opacity duration-100 bottom-3 left-2 flex gap-1 items-center bg-white/90 px-1 py-1 rounded text-[12px] font-bold`}
        >
          <span>{data.rating}</span>
          <i className="text-green-700 fa-solid fa-star"></i>
          <span>{data.numReviews}</span>
        </div>
      </div>
      {/* Card Details Section */}
      <div className="card-details bg-white flex flex-col items-start px-4 py-2">
        <h1
          className={`brand uppercase text-[16px] font-bold ${
            location.pathname === "/wishlist" ? "hidden" : " "
          }`}
        >
          {data.brand}
        </h1>
        <h1 className="card-title text-[14px]">{data.title}</h1>
        <div className="card-prize flex gap-2">
          <span className="card-price text-[14px] font-bold">
            ₹{data.price}
          </span>
          <del className="card-MRP text-[12px] text-gray-500">₹{data.mrp}</del>
          <span className="card-discount text-[13px] text-orange-500">
            ({data.discount}%)
          </span>
        </div>
        <span
          className={`card-qtys ${
            location.pathname === "/wishlist" ? "hidden" : " "
          } text-orange-500 text-[13px] font-bold`}
        >
          Only {data.qty} left!
        </span>
      </div>
      {/* Add to Cart Button (Hidden by Default) */}
      <div
        className={`${location.pathname === "/wishlist" ? "hidden" : "flex"}`}
      >
        <div className="card-addCart absolute bottom-15 bg-white w-full h-[60px] flex py-5 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => handleCart()}
            className="w-[150px] rounded h-[30px] border-2 border-[#ff3e6c] hover:bg-[#ff3e6c] hover:text-white text-[#ff3e6c] font-bold"
          >
            Add to Cart
          </button>
        </div>
        {/* Wishlist Button */}
        <i
          onClick={() => {
            isWishlisted ? removeWishlist() : handleWishlist();
          }}
          className={`absolute top-5 right-5 text-[20px] transition-all duration-300 ${
            isWishlisted
              ? "fa-solid fa-heart text-[#ff3e6c]"
              : "fa-regular fa-heart text-[gray] opacity-0 group-hover:opacity-100"
          }`}
        ></i>
      </div>
      {/* Wishlist Card Section */}
      <div
        className={`${location.pathname !== "/wishlist" ? "hidden" : "flex"}`}
      >
        <div className="absolute border-[1px] border-gray-200 bottom-0 bg-white w-full h-[40px] flex py-5 justify-center card-wishlist items-center">
          <button
            onClick={moveToBag}
            className="w-[150px] rounded h-[30px] text-[#ff3e6c] font-bold"
          >
            Move to Bag
          </button>
        </div>
        {/* Close Wishlist Item */}
        <i
          onClick={() => removeWishlist()}
          className={`fa-solid card-close fa-xmark absolute top-2 text-[12px] rounded-full right-2`}
        ></i>
      </div>
    </section>
  );
};

export default Card;
