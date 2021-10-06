import React from "react";
import CarList from "../CarList/CarList";
import RadioGroup from "../RadioGroup/RadioGroup";
import "./OrderModel.scss";
import { carListOptions } from '../../constants'

const OrderModel = () => {
  return (
    <div className="order-model">
      <RadioGroup arrRadioGroup={carListOptions} classNamePattern='order-model__options'/>
      <CarList />
    </div>
  );
};

export default OrderModel;
