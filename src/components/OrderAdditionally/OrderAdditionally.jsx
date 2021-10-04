import React from "react";
import "./OrderAdditionally.scss";
import RadioGroup from '../RadioGroup/RadioGroup';
import { carColorOptions, rate } from '../../constants';
import PickDate from "../PickDate/PickDate";
import AddService from "../AddService/AddService";

const OrderAdditionally = () => {
  return (
    <div className='additionally'>
      <div className="additionally__color">
        <h3 className="additionally__header">Цвет</h3>
        <RadioGroup arrRadioGroup={carColorOptions} classNamePattern='color__radio-group'/>
      </div>
      <div className="additionally__date">
        <h3 className="additionally__header">Дата аренды</h3>
        <PickDate />
      </div>
      <div className="additionally__rate">
        <h3 className="additionally__header">Тариф</h3>
        <RadioGroup arrRadioGroup={rate} classNamePattern='rate__radio-group'/>
      </div>
      <div className="additionally__add-service">
        <h3 className="additionally__header">Доп услуги</h3>
        <AddService />
      </div>
    </div>
  );
};

export default OrderAdditionally;
