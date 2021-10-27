import React from "react";
import "./OrderTabs.scss";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-order_page.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex } from "../../store/tabs/actions";

const OrderTabs = () => {
  const dispatch = useDispatch();
  const {
    firstTabIndex,
    secondTabIndex,
    thirdTabIndex,
    fourthTabIndex,
    activeIndex,
  } = useSelector((state) => state.tabsReducer);
  const { selectedCity, pointsForSelectedCity } = useSelector(
    (state) => state.locationReducer
  );
  const { activeCarInfo } = useSelector((state) => state.carListReducer);
  const { selectedColor, startDate, endDate, selectedRate } = useSelector(
    (state) => state.additionallyReducer
  );

  const isAvailableSecondTab =
    selectedCity && pointsForSelectedCity ? "tabs__item" : "item_disabled";
  const isSecondActive = activeIndex === secondTabIndex ? " item_active" : "";

  const isAvailableThirdTab = activeCarInfo.name
    ? "tabs__item"
    : "item_disabled";
  const isThirdActive = activeIndex === thirdTabIndex ? " item_active" : "";

  const isAvailableFourthTab =
    selectedColor && startDate && endDate && selectedRate
      ? "tabs__item"
      : "item_disabled";
  const isFourthActive = activeIndex === fourthTabIndex ? " item_active" : "";

  return (
    <>
      <ul className="tabs">
        <li>
          <Link
            id={firstTabIndex}
            to="/order-page/location"
            className={
              activeIndex === firstTabIndex ? "item_active" : "tabs__item"
            }
            onClick={() => dispatch(setActiveIndex(firstTabIndex))}
          >
            Местоположение
          </Link>
        </li>
        <li>
          <ArrowIcon className="arrow-icon" />
        </li>
        <li>
          <Link
            id={secondTabIndex}
            to="/order-page/model"
            className={isAvailableSecondTab + isSecondActive}
            onClick={() => dispatch(setActiveIndex(secondTabIndex))}
          >
            Модель
          </Link>
        </li>
        <li>
          <ArrowIcon className="arrow-icon" />
        </li>
        <li>
          <Link
            id={thirdTabIndex}
            to="/order-page/additionally"
            className={isAvailableThirdTab + isThirdActive}
            onClick={() => dispatch(setActiveIndex(thirdTabIndex))}
          >
            Дополнительно
          </Link>
        </li>
        <li>
          <ArrowIcon className="arrow-icon" />
        </li>
        <li>
          <Link
            id={fourthTabIndex}
            to="/order-page/total"
            className={isAvailableFourthTab + isFourthActive}
            onClick={() => dispatch(setActiveIndex(fourthTabIndex))}
          >
            Итого
          </Link>
        </li>
      </ul>
    </>
  );
};

export default OrderTabs;
