import React from "react";
import "./OrderTabs.scss";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-order_page.svg";
import { Link } from "react-router-dom";

const OrderTabs = () => {
  return (
    <>
      <ul className="tabs">
        <li>
          <Link to="/order-page/location" className="tabs__item item_active">
            Местоположение
          </Link>
        </li>
        <li>
          <ArrowIcon className="arrow-icon" />
        </li>
        <li>
          <Link to="/order-page/model" className="tabs__item item_disabled">
            Модель
          </Link>
        </li>
        <li>
          <ArrowIcon className="arrow-icon" />
        </li>
        <li>
          <Link to='/order-page/additionally' className="tabs__item item_disabled">
            Дополнительно
          </Link>
        </li>
        <li>
          <ArrowIcon className="arrow-icon" />
        </li>
        <li>
          <Link to='/order-page/total' className="tabs__item item_disabled">
            Итого
          </Link>
        </li>
      </ul>
    </>
  );
};

export default OrderTabs;
