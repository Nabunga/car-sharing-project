import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedColor } from "../../store/additionally/actions";

const RadioGroupCarColors = () => {
  const dispatch = useDispatch();
  const { activeCarInfo } = useSelector((state) => state.carListReducer);

  const colors = activeCarInfo.colors;

  const renderedColors = colors.map((color) => {
    return (
      <div className="order-model__input-group" key={color}>
        <input
          className="order-model__input input_first"
          type="radio"
          id={color}
          name="color"
          value={color}
        />
        <label
          className="order-model__label"
          htmlFor={color}
          onClick={() => dispatch(setSelectedColor(color))}
        >
          {color}
        </label>
      </div>
    );
  });

  return <div className="order-model__options colors">{renderedColors}</div>;
};

export default RadioGroupCarColors;
