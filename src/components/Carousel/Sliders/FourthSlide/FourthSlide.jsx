import React from "react";
import "./FourthSlide.scss";

const FourthSlide = () => {
  return (
    <div className="fourth-slide">
      <div className="fourth-slide__content">
          <h2 className="fourth-slide__header">Обслуживание</h2>
        <p className="fourth-slide__text">
          Автомобиль проходит еженедельное ТО.
        </p>
        <button className="fourth-slide__btn">Подробнее</button>
      </div>
    </div>
  );
};

export default FourthSlide;
