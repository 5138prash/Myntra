import React from "react";
import Data from "../../data/Carousel_Data"; // Importing carousel data
import { Pagination, Autoplay } from "swiper/modules"; // Importing Swiper modules
import { Swiper, SwiperSlide } from "swiper/react"; // Importing Swiper components

// Importing Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <section>
      {/* Main Carousel Container */}
      <div className="main-carousel mt-[120px] h-[540px] flex">
        <Swiper
          modules={[Pagination, Autoplay]} // Enabling pagination and autoplay
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Show only one slide at a time
          loop={true} // Enable infinite loop
          grabCursor={true} // Change cursor to grab when hovering
          pagination={{ clickable: true }} // Enable pagination bullets
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay settings
        >
          {/* Mapping through carousel data to create slides */}
          {Data.map(({ id, url }) => {
            return (
              <SwiperSlide key={id}>
                <div>
                  {/* Image for each slide */}
                  <img src={url} alt={`Image${id}`} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
