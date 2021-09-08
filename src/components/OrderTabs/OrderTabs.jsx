import React from "react";
import "./OrderTabs.scss";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-order_page.svg";

const OrderTabs = () => {
  return (
    <ul className="tabs">
      <li>
        <a href="#" className="tabs__item item_active">
          Местоположение
        </a>
      </li>
      <li>
        <ArrowIcon className="arrow-icon" />
      </li>
      <li>
        <a href="#" className="tabs__item item_disabled">
          Модель
        </a>
      </li>
      <li>
        <ArrowIcon className="arrow-icon" />
      </li>
      <li>
        <a href="#" className="tabs__item item_disabled">
          Дополнительно
        </a>
      </li>
      <li>
        <ArrowIcon className="arrow-icon" />
      </li>
      <li>
        <a href="#" className="tabs__item item_disabled">
          Итого
        </a>
      </li>
    </ul>
  );
};

export default OrderTabs;
