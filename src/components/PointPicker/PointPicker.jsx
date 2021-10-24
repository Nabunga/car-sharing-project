import React from "react";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";

const PointPicker = () => {
  return (
    <>
      

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
    </>
  );
};

export default PointPicker;
