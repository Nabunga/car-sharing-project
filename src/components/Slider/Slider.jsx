import React from "react";
import "./Slider.scss";
import ButtonMainPage from "../ButtonMainPage/ButtonMainPage";

const Slider = ({ header, text, className, classNameSlide}) => {
  return (
    <div className={classNameSlide}>
      <div className="slider__content">
        <h2 className="slider__header">{header}</h2>
        <p className="slider__text">
          {text}
        </p>
        <ButtonMainPage className={className} text='Подробнее'/>
      </div>
    </div>
  );
};

export default Slider;
