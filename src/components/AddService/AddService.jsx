import React from "react";
import "./AddService.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setChildChair,
  setTank,
  setWheel,
} from "../../store/additionally/actions";

const AddService = () => {
  const dispatch = useDispatch();
  const { isFullTank, isNeedChildChair, isRightWheel } = useSelector(
    (state) => state.additionallyReducer
  );

  return (
    <div className="add-service">
      <input type="checkbox" name="first" id="first" />
      <label
        className="add-service__label"
        htmlFor="first"
        onClick={() => dispatch(setTank(!isFullTank))}
      >
        Полный бак, 500р
      </label>

      <input type="checkbox" name="second" id="second" />
      <label
        className="add-service__label"
        htmlFor="second"
        onClick={() => dispatch(setChildChair(!isNeedChildChair))}
      >
        Детское кресло, 200р
      </label>

      <input type="checkbox" name="third" id="third" />
      <label
        className="add-service__label"
        htmlFor="third"
        onClick={() => dispatch(setWheel(!isRightWheel))}
      >
        Правый руль, 1600р
      </label>
    </div>
  );
};

export default AddService;
