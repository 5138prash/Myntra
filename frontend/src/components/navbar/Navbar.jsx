import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from "../../assets/logo.png";
import baseApi from "../../api/axiosInstance";

const Navbar = ({ setSearchQuery }) => {
  const [cartItems, setCartItems] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  // Fetch cart items for logged-in user
  const fetchCartItems = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await baseApi.get(`/cart/${userId}`);
      setCartItems(response.data.cart.items || []);
    } catch (error) {
      console.error("Error fetching cart:", error.message);
    }
  };

  // On first render: set authentication status and fetch cart
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
    fetchCartItems();
  }, []);

  // Handle search action on "Enter" key
  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      setSearchQuery(search);
      navigate("/products");
    }
  };

  // Logout user and clear localStorage
  const handleLogout = async () => {
    try {
      await baseApi.post("/user/logout");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setAuthenticated(false);
      setCartItems([]);
      navigate("/login");
      toast.success("Logged out Successfully");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <header className="shadow-lg nav-header shadow-gray-400/10 px-6 py-3 fixed bg-white top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center">
        {/* ==== Left Section: Logo + Navigation Links ==== */}
        <div className="nav-right flex uppercase py-1 gap-4">
          {/* ==== Logo + Hamburger ==== */}
          <div className="flex items-center logo-section w-[120px]">
            <i
              onClick={() => setMenu(!menu)}
              className="fa-solid fa-bars-staggered text-[28px] text-gray-600"
            ></i>
            <img
              src={Logo}
              alt="logo"
              className="w-full object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* ==== Category Navigation ==== */}
          <div className={`${!menu ? "hidden" : "flex"} navbar relative`}>
            {["Men", "Women", "Kids", "Home", "Beauty", "Genz", "Studio"].map(
              (category, index) => (
                <div
                  key={index}
                  onClick={() => navigate("/products")}
                  className="cursor-pointer navlinks px-5 relative text-gray-700 font-bold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-4 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 text-[14px] flex flex-wrap items-center"
                >
                  <Link to={`#${category}`} className="relative">
                    {category}
                  </Link>
                </div>
              )
            )}

            {/* New badge */}
            <span className="text-pink-500 text-[11px] font-bold absolute top-[2px] right-[5px]">
              new
            </span>
          </div>
        </div>

        {/* ==== Right Section: Search + Profile + Wishlist + Cart ==== */}
        <div className="flex px-3">
          {/* ==== Search Input ==== */}
          <div className="search-section rounded">
            <div className="bg-gray-100 rounded-lg px-4 flex items-center relative">
              <i
                onClick={() => {
                  if (search.trim() !== "") {
                    setSearchQuery(search);
                    navigate("/products");
                  }
                }}
                className="search-icon fa-solid fa-magnifying-glass text-gray-500 text-[14px] cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-[500px] search-bar py-2 px-3 outline-none text-[14px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
              />
              {search && (
                <i
                  onClick={() => {
                    setSearch("");
                    setSearchQuery("");
                  }}
                  className="fa-solid fa-xmark text-gray-500 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-red-500"
                ></i>
              )}
            </div>
          </div>

          {/* ==== User Actions: Login/Logout, Wishlist, Bag ==== */}
          <div className="flex profile-section items-center px-[10px]">
            {/* Profile or Logout button */}
            {!authenticated ? (
              <Link
                to="/login"
                className="cursor-pointer flex relative px-5 flex-col items-center after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-6 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                <i className="fa-regular fa-user text-[15px]"></i>
                <p className="text-sm font-semibold">Profile</p>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="cursor-pointer flex relative px-5 flex-col items-center after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-6 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                <i className="icon-logout text-[15px]"></i>
                <p className="text-sm font-semibold">Logout</p>
              </button>
            )}

            {/* Wishlist button */}
            <Link to="/wishlist" className="flex flex-col items-center px-5">
              <i className="icon-heart text-[15px]"></i>
              <p className="text-sm font-semibold">Wishlist</p>
            </Link>

            {/* Cart/Bag button */}
            <Link
              to="/bag"
              className="relative flex cursor-pointer flex-col items-center px-5"
            >
              <i className="icon-bag text-[15px]"></i>
              <p className="text-sm font-semibold">
                Bag{" "}
                <span
                  className={`${
                    cartItems.length > 0 ? "text-[#fff]" : "hidden"
                  } font-semibold absolute top-[-5px] text-[11px] bg-[#ff3e6c] rounded-full px-[6px] right-2`}
                >
                  {cartItems.length}
                </span>
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
