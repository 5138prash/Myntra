import React, { useEffect, useMemo, useState } from "react";
import Filter from "../components/filter/Filter";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Card from "../components/card/Card";
import baseApi from "../api/axiosInstance";

const Product = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await baseApi.get("/products");
        setProducts(response.data.products); 
        console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    const fetchWishlist = async () => {
      try {
        const res = await baseApi.get(`/wishlist/${localStorage.getItem("userId")}`, {
          withCredentials: true,
        });
        setWishlist(res.data?.wishlist?.products || []);
      } catch (err) {
        console.error("Failed to fetch wishlist", err);
      }
    };
  
    fetchWishlist()
    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let output = [...products]; // avoid mutating state directly
  
    if (searchQuery) {
      output = output.filter((item) => {
        const name = item?.name || "";
        const brand = item?.brand || "";
        return (
          name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }
  
    if (price === "HightoLow") {
      output.sort((a, b) => b.price - a.price);
    } else if (price === "LowtoHigh") {
      output.sort((a, b) => a.price - b.price);
    }
  
    return output;
  }, [products, searchQuery, price]);
  

  return (
    <div className="navbar-breadcrumb mt-[90px] mx-[150px]">
      <Breadcrumb />
      <Filter price={price} setPrice={setPrice} />
      <div className="w-full h-full flex">
        <div className="w-full product-body px-10 py-10 flex flex-wrap gap-5 justify-between">
          {filteredProducts.map((data, index) => (
            <Card data={data} key={index} wishlist={wishlist} setWishlist={setWishlist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
