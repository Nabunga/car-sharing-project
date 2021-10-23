import React from "react";
import { useDispatch } from "react-redux";
import { getCarList } from "../../store/asyncActions/asyncActions";
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
            dispatch(getCarList(category.id));
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
        defaultChecked
      />
      <label
        className="order-model__label"
        htmlFor="all"
        onClick={() => {
          dispatch(getCarList());
        }}
      >
        Все
      </label>
      {renderedCategory}
    </div>
  );
};

export default RadioGroup;
