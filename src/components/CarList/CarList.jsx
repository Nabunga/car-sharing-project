import React from "react";
import "./CarList.scss";
import { useSelector } from "react-redux";
import Car from "../Сar/Car";

const CarList = () => {
  const { carList, selectedCategory, carListByCategory } = useSelector((state) => state.carListReducer);
  
  return selectedCategory === "Все" ? (
    <div className="car-list"><Car carList={carList}/></div>
  ) : (
    <div className="car-list"><Car carList={carListByCategory}/></div>
  );
};

export default CarList;
