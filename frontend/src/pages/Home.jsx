import React from "react";
import Carousel from "../components/carousel/Carousel";  // Carousel component
import Favourite_Brands from "../data/Favourite_Brands";  // Favourite brands data
import ShopByCategory from "../data/ShopByCategory";  // Shop by category data
import Grand_Global_Brands from "../data/Grand_Global_Brands";  // Grand global brands data
import { Pagination } from "swiper/modules";  // Pagination module from Swiper
import { Swiper, SwiperSlide } from "swiper/react";  // Swiper and SwiperSlide components
import { Autoplay } from "swiper/modules";  // Autoplay module from Swiper
import { useNavigate } from "react-router-dom";  // useNavigate hook for navigation

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();  // For page navigation

  return (
    <section className="home-section">
      <Carousel />  {/* Carousel component */}

      {/* Favourite Brands Section */}
      <div className="my-5 p-8 heading">
        <h4 className="px-[50px] text-[38px] font-[650] text-gray-700 uppercase tracking-widest">
          Favourite Brands
        </h4>
      </div>

      <div className="slides py-4 flex w-full">
        <div className="flex gap-1 w-full justify-around flex-wrap slide-1">
          {Favourite_Brands.map(({ id, image }) => (
            <div className="slides-img cursor-pointer" key={id}>
              <img
                src={image}
                onClick={() => navigate("/products")}  // Navigate to products page on image click
                alt=""
                className="w-[205px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grand Global Brands Section */}
      <div className="heading my-5 p-8">
        <h4 className="px-[50px] text-[38px] font-[650] text-gray-700 uppercase tracking-widest">
          Grand Global Brands
        </h4>
      </div>

      <div className="slides-2 my-10 h-[440px] w-full flex">
        <Swiper
          className="flex swiper-2 py-8"
          modules={[Pagination, Autoplay]}  // Swiper modules
          spaceBetween={0}
          slidesPerView={6}
          slidesPerGroup={6}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2010, disableOnInteraction: false }}  // Autoplay configuration
          breakpoints={{
            200: { slidesPerView: 2, slidesPerGroup: 2 },
            600: { slidesPerView: 3, slidesPerGroup: 3 },
            1430: { slidesPerView: 6, slidesPerGroup: 6 },
          }}
        >
          {Grand_Global_Brands.map(({ id, image }) => (
            <SwiperSlide className="cursor-pointer h-[400px]" key={id}>
              <img
                className="swiper-img w-full h-full object-contain"
                src={image}
                alt={`image${id}`}
                onClick={() => navigate("/products")}  // Navigate to products page
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Shop by Category Section */}
      <div className="heading category-heading my-5 p-8">
        <h4 className="px-[50px] text-[38px] font-[650] text-gray-700 uppercase tracking-widest">
          Shop by Category
        </h4>
      </div>

      <div className="shopByCategory w-full px-2 py-10">
        <div className="category-items w-full px-2 gap-7 flex flex-wrap items-center justify-around">
          {ShopByCategory.map(({ id, image }) => (
            <div key={id} className="category-img w-[250px] p-2 cursor-pointer flex">
              <img
                src={image}
                onClick={() => navigate("/products")}  // Navigate to products page
                alt=""
                className="w-full h-full object-fit"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
