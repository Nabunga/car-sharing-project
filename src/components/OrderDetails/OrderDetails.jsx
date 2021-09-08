import React from "react";
import "./OrderDetails.scss";
import ButtonMainPage from "../ButtonMainPage/ButtonMainPage";

const OrderDetails = () => {
  return (
    <div className="order-details">
      <div className="order-details__container">
        <h2 className="order-details__header">Ваш заказ:</h2>
        <ul class="order-list">
          <li>
            <span class="title">Пункт выдачи</span>
            <span class="value">
              Ульяновск,
              <br /> Нариманова 42
            </span>
          </li>
        </ul>
        <p className="order-details__price">
          <span className="order-details__price_bold">Цена:</span> от 8 000 до
          12 000 ₽
        </p>
        <ButtonMainPage title="Выбрать модель" className="btn_disabled" />
      </div>
    </div>
  );
};

export default OrderDetails;
