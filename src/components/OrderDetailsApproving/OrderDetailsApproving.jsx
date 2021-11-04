import React, { useEffect } from "react";
import ButtonMainPage from "../ButtonMainPage/ButtonMainPage";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { getReadableDateApproving } from "../../store/orderTotal/actions";

const OrderDetailsApproving = () => {
  const dispatch = useDispatch();
  const { orderTotal, readableDate } = useSelector(
    (state) => state.orderTotalReducer
  );

  const firstDate = moment(orderTotal?.dateTo);
  const secondDate = moment(orderTotal?.dateFrom);
  const calcDate = firstDate.diff(secondDate, "minute");

  const dateConverter = (value) => {
    const days = Math.floor(value / 1440);
    const hours = Math.floor((value % 1440) / 60);
    return {
      days: days,
      hours: hours,
    };
  };

  useEffect(() => {
    dispatch(getReadableDateApproving(dateConverter(calcDate)));
  }, [orderTotal]);

  return (
    <div className="order-details">
      <div className="order-details__container">
        <h2 className="order-details__header">Ваш заказ:</h2>
        <ul className="order-list">
          <li>
            <span className="title">Пункт выдачи</span>
            <span className="value">
              {orderTotal?.cityId?.name},
              <br /> {orderTotal?.pointId?.address}
            </span>
          </li>
          <li>
            <span className="title">Модель</span>
            <span className="value">{orderTotal?.carId?.name}</span>
          </li>
          <li>
            <span className="title">Цвет</span>
            <span className="value">{orderTotal?.color}</span>
          </li>
          <li>
            <span className="title">Длительность аренды</span>
            <span className="value">
              {readableDate.days + "д " + readableDate.hours + "ч"}
            </span>
          </li>
          <li>
            <span className="title">Полный бак</span>
            <span className="value">
              {orderTotal?.isFullTank ? "Да" : "Нет"}
            </span>
          </li>
          <li>
            <span className="title">Детское кресло</span>
            <span className="value">
              {orderTotal?.isNeedChildChair ? "Да" : "Нет"}
            </span>
          </li>
          <li>
            <span className="title">Правый руль</span>
            <span className="value">
              {orderTotal?.isRightWheel ? "Да" : "Нет"}
            </span>
          </li>
        </ul>
        <p className="order-details__price">
          <span className="order-details__price_bold">Цена: </span>
          {orderTotal?.price} ₽
        </p>
      </div>
      <ButtonMainPage text="Отменить" className="btn slider__btn-third" />
    </div>
  );
};

export default OrderDetailsApproving;
