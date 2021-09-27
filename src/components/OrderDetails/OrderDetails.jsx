import React from "react";
import "./OrderDetails.scss";
import ButtonMainPage from "../ButtonMainPage/ButtonMainPage";

const OrderDetails = () => {
  return (
    <div className="order-details">
      <div className="order-details__container">
        <h2 className="order-details__header">Ваш заказ:</h2>
        <ul className="order-list">
          <li>
            <span className="title">Пункт выдачи</span>
            <span className="value">
              Ульяновск,
              <br /> Нариманова 42
            </span>
          </li>
        </ul>
        <p className="order-details__price">
          <span className="order-details__price_bold">Цена:</span> от 8 000 до
          12 000 ₽
        </p>
      </div>
      <ButtonMainPage title="Выбрать модель" className="btn_disabled" />
    </div>
  );
};

export default OrderDetails;
