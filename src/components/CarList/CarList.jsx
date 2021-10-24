import React from "react";
import "./CarList.scss";
import { useDispatch } from "react-redux";
import Car from "../Сar/Car";
import { getCarList } from "../../store/asyncActions/asyncActions";

const CarList = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getCarList());
  }, [])
  
  return <div className="car-list"><Car /></div> 
};

export default CarList;
