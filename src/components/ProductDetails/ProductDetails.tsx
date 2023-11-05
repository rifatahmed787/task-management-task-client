"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, Thumbs } from "swiper/modules"; // Change the import
import "swiper/css";
type Swiper = any;
export default function App() {
  const thumbsSwiperRef = useRef<Swiper | null>(null);

  const handleThumbsSwiper = (swiper: any) => {
    thumbsSwiperRef.current = swiper;
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        modules={[Navigation, Thumbs]}
        className="mySwiper2"
      ></Swiper>
      <Swiper
        onSwiper={handleThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      ></Swiper>
    </>
  );
}
