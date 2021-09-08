import React from "react";
import "./OrderLocation.scss";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";
import map from "../../assets/img/map.png";

const OrderLocation = () => {
  return (
    <div className="order__location">
      <div className="order-inputs">
        <div className="city-input">
          <label className="input-label" htmlFor="city-choise">
            Город
          </label>
          <input
            list="city-options"
            id="city-choise"
            name="city-choise"
            placeholder="Выберите город"
            autoComplete="on"
          />
          <CrossIcon className="cross-icon" />
        </div>

        <datalist id="city-options">
          <option value="Ульяновск"></option>
          <option value="Самара"></option>
          <option value="Саранск"></option>
          <option value="Краснодар"></option>
        </datalist>

        <div className="point-input">
          <label className="input-label" htmlFor="point-select">
            Пункт выдачи
          </label>
          <input
            id="point-select"
            type="text"
            placeholder="Начните вводить пункт..."
          />
          <CrossIcon className="cross-icon" />
        </div>
      </div>

      <div className="order__map">
        <p className="input-label">Выбрать на карте:</p>
        <img className="order__map-image" src={map} alt="map" />
      </div>
    </div>
  );
};

export default OrderLocation;
