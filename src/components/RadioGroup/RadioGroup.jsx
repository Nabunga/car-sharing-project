import React from "react";
import { carListOptions } from "../../constants";

const RadioGroup = () => {
  const renderedOptions = carListOptions.map((option) => {
    return (
      <div className={option.divClassName}>
        <input
          className={option.inputClassName}
          type="radio"
          id={option.id}
          name={option.name}
          value={option.value}
        />
        <label className={option.labelClassName} htmlFor={option.htmlFor}>
          {option.content}
        </label>
      </div>
    );
  });

  return <div className="order-model__options">{renderedOptions}</div>;
};

export default RadioGroup;
