import React from "react";
import CarList from "../CarList/CarList";
import RadioGroup from "../RadioGroup/RadioGroup";
import "./OrderModel.scss";

const OrderModel = () => {
  return (
    <div className="order-model">
      <RadioGroup />
      <CarList />
    </div>
  );
};

export default OrderModel;
