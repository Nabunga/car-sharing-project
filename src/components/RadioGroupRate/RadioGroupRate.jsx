import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedRate } from "../../store/additionally/actions";

const RadioGroupRate = () => {
  const dispatch = useDispatch();
  const { rate } = useSelector((state) => state.additionallyReducer);

  const renderedRate = rate.map((type) => {
    return (
      <div className="order-model__input-group" key={type.name}>
        <input
          className="order-model__input input_first"
          type="radio"
          id={type.name}
          name="rate"
          value={type.name}
        />
        <label
          className="rate__label"
          htmlFor={type.name}
          onClick={() => dispatch(setSelectedRate(type.name))}
        >
          {type.name}
        </label>
      </div>
    );
  });

  return <div className="order-model__options colors">{renderedRate}</div>;
};

export default RadioGroupRate;
