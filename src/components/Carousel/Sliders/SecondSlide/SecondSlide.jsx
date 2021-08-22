import React from "react";
import "./SecondSlide.scss";

const SecondSlide = () => {
  return (
    <div className="second-slide">
      <div className="second-slide__content">
          <h2 className="second-slide__header">Страховка</h2>
        <p className="second-slide__text">
          Полная страховка автомобиля.
        </p>
        <button className="second-slide__btn">Подробнее</button>
      </div>
    </div>
  );
};

export default SecondSlide;
