import React from "react";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { setPoint } from "../../store/location/actions";

const PointPicker = ({ points }) => {
  const dispatch = useDispatch();

  const validPoints = points.filter(point => {
    return point.cityId !== null
  })
  console.log(validPoints);

  

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
        />
        <datalist id="point-options">
          {/* {renderedPoints} */}
        </datalist>
        <CrossIcon className="cross-icon" />
      </div>
    </>
  );
};

export default PointPicker;
