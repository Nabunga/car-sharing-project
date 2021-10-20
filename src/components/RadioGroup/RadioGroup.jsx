import React from "react";
import { useDispatch } from "react-redux";
import {
  getCarList,
  getCarListByCategory,
} from "../../store/asyncActions/asyncActions";
import { setSelectedCategory } from "../../store/model/actions";

const RadioGroup = ({ categoryList }) => {
  const dispatch = useDispatch();

  const renderedCategory = categoryList.map((category) => {
    return (
      <div className="order-model__input-group" key={category.id}>
        <input
          className="order-model__input input_first"
          type="radio"
          id={category.id}
          name="category"
          value={category.id}
        />
        <label
          className="order-model__label"
          htmlFor={category.id}
          onClick={() => {
            dispatch(setSelectedCategory(category.id));
            dispatch(getCarListByCategory(category.id));
          }}
        >
          {category.name}
        </label>
      </div>
    );
  });

  return (
    <div className="order-model__options">
      <input
        className="order-model__input input_first"
        type="radio"
        id="all"
        name="category"
        value="all"
      />
      <label
        className="order-model__label"
        htmlFor="all"
        onClick={() => {
          dispatch(getCarList());
          dispatch(setSelectedCategory("Все"));
        }}
      >
        Все
      </label>
      {renderedCategory}
    </div>
  );
};

export default RadioGroup;
