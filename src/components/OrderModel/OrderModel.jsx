import React from "react";
import CarList from "../CarList/CarList";
import "./OrderModel.scss";


const OrderModel = () => {
  return (
    <div className="order-model">
      <div className="order-model__options">
        <div className='order-model__input-group'>
          <input
            className="order-model__input input_first"
            type="radio"
            id="all"
            name="car-options"
            value="all"
          />
          <label className="order-model__label label_active label_first" htmlFor="all">
            Все модели
          </label>
        </div>
        <div className='order-model__input-group'>
          <input
            className="order-model__input"
            type="radio"
            id="low-cost"
            name="car-options"
            value="low-cost"
          />
          <label className="order-model__label" htmlFor="low-cost">
            Эконом
          </label>
        </div>
        <div className='order-model__input-group'>
          <input
            className="order-model__input"
            type="radio"
            id="premium"
            name="car-options"
            value="premium"
          />
          <label className="order-model__label" htmlFor="premium">
            Премиум
          </label>
        </div>
      </div>
      <CarList />
    </div>
  );
};

export default OrderModel;
