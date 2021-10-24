import React, { useEffect } from "react";
import "./OrderAdditionally.scss";
import RadioGroupCarColors from "../RadioGroupCarColors/RadioGroupCarColors";
import PickDate from "../PickDate/PickDate";
import AddService from "../AddService/AddService";
import { useDispatch } from "react-redux";
import { getRate } from "../../store/asyncActions/asyncActions";
import RadioGroupRate from "../RadioGroupRate/RadioGroupRate";

const OrderAdditionally = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRate());
  }, []);

  return (
    <div className="additionally">
      <div className="additionally__color">
        <h3 className="additionally__header">Цвет</h3>
        <RadioGroupCarColors />
      </div>
      <div className="additionally__date">
        <h3 className="additionally__header">Дата аренды</h3>
        <PickDate />
      </div>
      <div className="additionally__rate">
        <h3 className="additionally__header">Тариф</h3>
        <RadioGroupRate />
      </div>
      <div className="additionally__add-service">
        <h3 className="additionally__header">Доп услуги</h3>
        <AddService />
      </div>
    </div>
  );
};

export default OrderAdditionally;
