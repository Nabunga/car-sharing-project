import React from "react";

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
        <SwiperSlide>
          <Slider
            header="Бесплатная парковка"
            text="Оставляйте машину на платных городских парковках и разрешенных местах,
          не нарушая ПДД, а также в аэропортах."
            className="slider__btn slider__btn-first"
            classNameSlide="slider slider-first"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            header="Страховка"
            text="Полная страховка автомобиля."
            className="slider__btn slider__btn-second"
            classNameSlide="slider slider-second"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            header="Бензин"
            text="Полный бак на любой заправке города за наш счёт."
            className="slider__btn slider__btn-third"
            classNameSlide="slider slider-third"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            header="Обслуживание"
            text="Автомобиль проходит еженедельное ТО."
            className="slider__btn slider__btn-fourth"
            classNameSlide="slider slider-fourth"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
