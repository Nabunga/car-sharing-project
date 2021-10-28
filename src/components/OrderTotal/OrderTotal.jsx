import React from "react";
import "./OrderTotal.scss";
import { useSelector } from "react-redux";
import { URL_FOR_IMAGES } from "../../axios/api";

const OrderTotal = ({ orderApprovingTitle }) => {
  const { activeCarInfo } = useSelector((state) => state.carListReducer);
  const { isFullTank, readableStartDate } = useSelector(
    (state) => state.additionallyReducer
  );

  return (
    <div className="total">
      <div className="total__info">
        {orderApprovingTitle}
        <h2 className="info__carname">{activeCarInfo.name}</h2>
        <div className="info__license-plate">{activeCarInfo.number}</div>
        <h3 className="info__details">
          <span className="info__details_bold">Топливо </span>
          {isFullTank ? "100" : activeCarInfo.tank} %
        </h3>
        <h3 className="info__details">
          <span className="info__details_bold">Доступна с </span>
          {readableStartDate}
        </h3>
      </div>
      <div className="total__car-picture">
        <img
          className="info-img"
          alt="car"
          src={
            activeCarInfo.thumbnail.path.includes("base64")
              ? activeCarInfo.thumbnail.path
              : URL_FOR_IMAGES + activeCarInfo.thumbnail.path
          }
        />
      </div>
    </div>
  );
};

export default OrderTotal;
