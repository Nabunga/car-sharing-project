import React from "react";
import { sliderArr } from "../../constants";

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

import Slider from "../Slider/Slider";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Carousel() {
  const renderedSlider = sliderArr.map((slide) => {
    return (
      <SwiperSlide key={slide.header}>
        <Slider
          header={slide.header}
          text={slide.text}
          className={slide.className}
          classNameSlide={slide.classNameSlide}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        className="mySwiper"
      >
        {renderedSlider}
      </Swiper>
    </>
  );
}
