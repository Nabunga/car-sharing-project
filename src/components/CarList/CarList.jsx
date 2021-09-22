import React from "react";
import "./CarList.scss";
import { carsParams } from "../../constants";

const CarList = () => {
  const renderedCarList = carsParams.map((car) => {
    return (
      <div className="info">
        <div className="info-content">
          <h3 className="info-title">{car.name}</h3>
          <p className="info-price">{car.price}</p>
          <img className="info-img" src={car.pic} alt="elantra" />
        </div>
      </div>
    );
  });

  return <div className="car-list">{renderedCarList}</div>;
};

export default CarList;
