import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Carousel.scss";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

import FirstSlide from "./Sliders/FirstSlide/FirstSlide";
import SecondSlide from "./Sliders/SecondSlide/SecondSlide";
import ThirdSlide from "./Sliders/ThirdSlide/ThirdSlide";
import FourthSlide from "./Sliders/FourthSlide/FourthSlide";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Carousel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SecondSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ThirdSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FourthSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
