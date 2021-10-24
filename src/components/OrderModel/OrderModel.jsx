import React, { useEffect } from "react";
import CarList from "../CarList/CarList";
import RadioGroupCarCategory from "../RadioGroupCarCategory/RadioGroupCarCategory";
import "./OrderModel.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryList } from "../../store/asyncActions/asyncActions";

const OrderModel = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.carListReducer);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <div className="order-model">
      <RadioGroupCarCategory categoryList={categoryList} />
      <CarList />
    </div>
  );
};

export default OrderModel;
