import React from "react";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";
import { useDispatch } from "react-redux";
import { setCity } from "../../store/location/actions";

const CityPicker = ({ cities }) => {
  const dispatch = useDispatch();

  const renderedCities = cities.map((city) => {
    return <option key={city.name} value={city.name} />;
  });

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
        onChange={(e) => dispatch(setCity(e.target.value))}
      />
      <datalist id="city-options">{renderedCities}</datalist>
      <CrossIcon
        className="cross-icon"
        onClick={() => dispatch(setCity(null))}
      />
    </div>
  );
};

export default CityPicker;
