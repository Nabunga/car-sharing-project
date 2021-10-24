import React from "react";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../store/location/actions";

const CityPicker = ({ cities }) => {
  const dispatch = useDispatch();
  const { selectedCity } = useSelector((state) => state.locationReducer);
  console.log(selectedCity);

  const renderedCities = cities.map(city => {
    return <option key={city.name} value={city.name} />
  })

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
        
      />
      <datalist id="city-options" onChange={() => dispatch(setCity())}>
        {renderedCities}
      </datalist>
      <CrossIcon className="cross-icon" onClick={() => dispatch(setCity(null))} />
    </div>
  );
};

export default CityPicker;
