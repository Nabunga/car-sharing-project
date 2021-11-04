import React from "react";
import "./OrderDetails.scss";
import ButtonMainPage from "../ButtonMainPage/ButtonMainPage";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex } from "../../store/tabs/actions";
import { Link } from "react-router-dom";

const OrderDetails = ({ setActive }) => {
  const dispatch = useDispatch();
  const { activeCarInfo } = useSelector((state) => state.carListReducer);
  const {
    selectedColor,
    startDate,
    endDate,
    rentDuration,
    selectedRate,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = useSelector((state) => state.additionallyReducer);
  const { selectedCity, pointsForSelectedCity } = useSelector(
    (state) => state.locationReducer
  );
  const { activeIndex } = useSelector((state) => state.tabsReducer);

  const btnText = () => {
    switch (activeIndex) {
      case 2:
        return "Дополнительно";
      case 3:
        return "Итого";
      case 4:
        return "Заказать";
      case 5:
        return "Отменить";
      default:
        return "Выбрать модель";
    }
  };

  const btnClassName = () => {
    if (activeIndex === 1 && selectedCity && pointsForSelectedCity) {
      return "btn";
    }
    if (activeIndex === 2 && activeCarInfo.name) {
      return "btn";
    }
    if (
      activeIndex === 3 &&
      selectedColor &&
      startDate &&
      endDate &&
      selectedRate
    ) {
      return "btn";
    }
    if (activeIndex === 4) {
      return "btn";
    }
    if (activeIndex === 5) {
      return "btn slider__btn-third";
    }
    return "btn btn_disabled";
  };

  const btnLink = () => {
    switch (activeIndex) {
      case 1:
        return "/order-page/model";
      case 2:
        return "/order-page/additionally";
      case 3:
        return "/order-page/total";
      default:
        return "/order-page/total";
    }
  };

  return (
    <div className="order-details">
      <div className="order-details__container">
        <h2 className="order-details__header">Ваш заказ:</h2>
        <ul className="order-list">
          {selectedCity && pointsForSelectedCity && (
            <li>
              <span className="title">Пункт выдачи</span>
              <span className="value">
                {selectedCity},
                <br /> {pointsForSelectedCity}
              </span>
            </li>
          )}
          {activeCarInfo.name && (
            <li>
              <span className="title">Модель</span>
              <span className="value">{activeCarInfo.name}</span>
            </li>
          )}
          {selectedColor && (
            <li>
              <span className="title">Цвет</span>
              <span className="value">{selectedColor}</span>
            </li>
          )}
          {startDate && endDate && (
            <li>
              <span className="title">Длительность аренды</span>
              <span className="value">
                {startDate && endDate
                  ? rentDuration.days + "д " + rentDuration.hours + "ч"
                  : ""}
              </span>
            </li>
          )}
          {selectedRate && (
            <li>
              <span className="title">Тариф</span>
              <span className="value">{selectedRate}</span>
            </li>
          )}
          {isFullTank && (
            <li>
              <span className="title">Полный бак</span>
              <span className="value">{isFullTank ? "Да" : "Нет"}</span>
            </li>
          )}
          {isNeedChildChair && (
            <li>
              <span className="title">Детское кресло</span>
              <span className="value">{isNeedChildChair ? "Да" : "Нет"}</span>
            </li>
          )}
          {isRightWheel && (
            <li>
              <span className="title">Правый руль</span>
              <span className="value">{isRightWheel ? "Да" : "Нет"}</span>
            </li>
          )}
        </ul>
        {activeCarInfo.priceMin && (
          <p className="order-details__price">
            <span className="order-details__price_bold">Цена:</span> от{" "}
            {activeCarInfo.priceMin} до {activeCarInfo.priceMax} ₽
          </p>
        )}
      </div>
      <Link
        to={btnLink()}
        onClick={() =>
          dispatch(
            activeIndex === 5
              ? setActiveIndex(activeIndex - 1)
              : setActiveIndex(activeIndex + 1)
          )
        }
      >
        <ButtonMainPage
          text={btnText()}
          className={btnClassName()}
          openModal={activeIndex === 4 ? () => setActive(true) : ""}
        />
      </Link>
    </div>
  );
};

export default OrderDetails;
