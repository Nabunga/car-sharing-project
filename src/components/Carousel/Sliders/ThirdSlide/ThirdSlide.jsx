import React from "react";
import "./ThirdSlide.scss";

const ThirdSlide = () => {
  return (
    <div className="third-slide">
      <div className="third-slide__content">
          <h2 className="third-slide__header">Бензин</h2>
        <p className="third-slide__text">
          Полный бак на любой заправке города за наш счёт.
        </p>
        <button className="third-slide__btn">Подробнее</button>
      </div>
    </div>
  );
};

export default ThirdSlide;
