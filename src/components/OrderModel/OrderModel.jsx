import React, { useEffect } from "react";
import CarList from "../CarList/CarList";
import RadioGroup from "../RadioGroup/RadioGroup";
import "./OrderModel.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryList } from "../../store/asyncActions/asyncActions";

const OrderModel = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(
    (state) => state.carListReducer.categoryList
  );

  useEffect(() => {
    dispatch(getCategoryList(categoryList));
  }, []);

  return (
    <div className="order-model">
      <RadioGroup categoryList={categoryList} />
      <CarList />
    </div>
  );
};

export default OrderModel;
