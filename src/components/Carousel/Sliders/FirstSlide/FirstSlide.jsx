import React from "react";
import "./FirstSlide.scss";

const FirstSlide = () => {
  return (
    <div className="first-slide">
      <div className="first-slide__content">
          <h2 className="first-slide__header">Бесплатная парковка</h2>
        <p className="first-slide__text">
          Оставляйте машину на платных городских парковках и разрешенных местах,
          не нарушая ПДД, а также в аэропортах.
        </p>
        <button className="first-slide__btn">Подробнее</button>
      </div>
    </div>
  );
};

export default FirstSlide;
