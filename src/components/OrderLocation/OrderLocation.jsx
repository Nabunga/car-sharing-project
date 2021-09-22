import React from "react";
import "./OrderLocation.scss";
import CityPicker from "../CityPicker/CityPicker";
import PointPicker from "../PointPicker/PointPicker";
import PointMap from "../PointMap/PointMap";

const OrderLocation = () => {
  return (
    <div className="order__location">
      <div className="order-inputs">
        <CityPicker />
        <PointPicker />
      </div>

      <div className="order__map">
        <PointMap />
      </div>
    </div>
  );
};

export default OrderLocation;
