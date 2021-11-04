import React from "react";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { setPointsForSelectedCity } from "../../store/location/actions";

const PointPicker = ({ points }) => {
  const dispatch = useDispatch();
  const { selectedCity } = useSelector((state) => state.locationReducer);

  const validPoints = points.filter((point) => {
    return point.cityId !== null && point.cityId.name === selectedCity;
  });

  const renderedPoints = validPoints.map((point) => {
    return <option key={point.address} value={point.address} />;
  });

  return (
    <>
      <div className="point-input">
        <label className="input-label" htmlFor="point-select">
          Пункт выдачи
        </label>
        <input
          list="point-options"
          id="point-select"
          name="point-select"
          placeholder="Начните вводить пункт..."
          onChange={(e) => dispatch(setPointsForSelectedCity(e.target.value))}
        />
        <datalist id="point-options">{renderedPoints}</datalist>
        <CrossIcon
          className="cross-icon"
          onClick={() => dispatch(setPointsForSelectedCity(null))}
        />
      </div>
    </>
  );
};

export default PointPicker;
