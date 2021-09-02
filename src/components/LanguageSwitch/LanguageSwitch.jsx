import React from "react";

const LanguageSwitch = ({ divClassName, idClassName}) => {
  return (
    <div className={divClassName}>
      <input type="checkbox" id="switch-input" />
      <label id={idClassName} for="switch-input">
        Eng
      </label>
    </div>
  );
};

export default LanguageSwitch;
