import React from "react";
import "./OrderDetails.scss";
import ButtonMainPage from "../ButtonMainPage/ButtonMainPage";
import { useSelector } from "react-redux";

const OrderDetails = ({ setActive }) => {
  const { activeCarInfo } = useSelector((state) => state.carListReducer);
  const {
    selectedColor,
    startDate,
    endDate,
    selectedRate,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = useSelector((state) => state.additionallyReducer);

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
          <li>
            <span className="title">Модель</span>
            <span className="value">{activeCarInfo.name}</span>
          </li>
          <li>
            <span className="title">Цвет</span>
            <span className="value">{selectedColor}</span>
          </li>
          <li>
            <span className="title">Тариф</span>
            <span className="value">{selectedRate}</span>
          </li>
          <li>
            <span className="title">Полный бак</span>
            <span className="value">{isFullTank ? "Да" : "Нет"}</span>
          </li>
          <li>
            <span className="title">Детское кресло</span>
            <span className="value">{isNeedChildChair ? "Да" : "Нет"}</span>
          </li>
          <li>
            <span className="title">Правый руль</span>
            <span className="value">{isRightWheel ? "Да" : "Нет"}</span>
          </li>
        </ul>
        <p className="order-details__price">
          <span className="order-details__price_bold">Цена:</span> от 8 000 до
          12 000 ₽
        </p>
      </div>
      <ButtonMainPage
        title="Выбрать модель"
        className="btn_disabled"
        openModal={() => setActive(true)}
      />
    </div>
  );
};

export default OrderDetails;
