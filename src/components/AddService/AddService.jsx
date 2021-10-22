import React from "react";
import "./AddService.scss";
import { useSelector, useDispatch } from "react-redux";
import { setAddOptions } from "../../store/additionally/actions";

const AddService = () => {
  const dispatch = useDispatch();


  return (
    <div className="add-service">

      <input type="checkbox" name="first" id="first" />
      <label className="add-service__label" htmlFor="first">
        Полный бак, 500р
      </label>

      <input type="checkbox" name="second" id="second" />
      <label className="add-service__label" htmlFor="second">
        Детское кресло, 200р
      </label>

      <input type="checkbox" name="third" id="third" />
      <label className="add-service__label" htmlFor="third">
        Правый руль, 1600р
      </label>
      
    </div>
  );
};

export default AddService;
