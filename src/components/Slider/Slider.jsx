import React from "react";
import "./Slider.scss";
import DetailedButton from "../DetailedButton/DetailedButton";

const Slider = ({ header, text, className, classNameSlide}) => {
  return (
    <div className={classNameSlide}>
      <div className="slider__content">
          <h2 className="slider__header">{header}</h2>
        <p className="slider__text">
          {text}
        </p>
        <DetailedButton className={className} />
      </div>
    </div>
  );
};

export default Slider;
