import React from "react";

const RadioGroup = ({ arrRadioGroup, classNamePattern }) => {
  const renderedOptions = arrRadioGroup.map((option) => {
    return (
      <div className={option.divClassName} key={option.id}>
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

  return <div className={classNamePattern}>{renderedOptions}</div>;
};

export default RadioGroup;
