import React from "react";
import "./OrderLocation.scss";
import CityPicker from "../CityPicker/CityPicker";
import PointPicker from "../PointPicker/PointPicker";
import PointMap from "../PointMap/PointMap";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getPoints } from "../../store/asyncActions/asyncActions";

const OrderLocation = () => {
  const dispatch = useDispatch();
  const { cities, points } = useSelector((state) => state.locationReducer);

  React.useEffect(() => {
    dispatch(getCities());
  }, []);

  React.useEffect(() => {
    dispatch(getPoints());
  }, [])

  return (
    <div className="order__location">
      <div className="order-inputs">
        <CityPicker cities={cities}/>
        <PointPicker points={points}/>
      </div>

      <div className="order__map">
        <PointMap />
      </div>
    </div>
  );
};

export default OrderLocation;
