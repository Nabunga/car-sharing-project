import React from "react";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";

const CityPicker = () => {
  return (
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
  );
};

export default CityPicker;
