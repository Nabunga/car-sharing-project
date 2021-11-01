import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { URL_FOR_IMAGES } from "../../axios/api";
import { getOrder } from "../../store/asyncActions/asyncActions";
import moment from "moment";

const OrderTotalApproving = ({ orderApprovingTitle }) => {
  const dispatch = useDispatch();
  const { orderTotal } = useSelector((state) => state.orderTotalReducer);

  let currentUrl = window.location.pathname;
  var idOrder = currentUrl.substr(currentUrl.lastIndexOf("/") + 1);

  useEffect(() => {
    dispatch(getOrder(idOrder));
  }, []);

  console.log(orderTotal);

  let startDateToUtc = moment(orderTotal.dateFrom).format("DD.MM.YYYY, h:mm");

  return (
    <div className="total">
      <div className="total__info">
        {orderApprovingTitle}
        <h2 className="info__carname">{orderTotal?.carId?.name}</h2>
        <div className="info__license-plate">{orderTotal?.carId?.number}</div>
        <h3 className="info__details">
          <span className="info__details_bold">Топливо </span>
          {orderTotal?.isFullTank ? "100" : orderTotal?.carId?.tank} %
        </h3>
        <h3 className="info__details">
          <span className="info__details_bold">Доступна с </span>
          {startDateToUtc}
        </h3>
      </div>
      <div className="total__car-picture">
        <img
          className="info-img"
          alt="car"
          src={
            orderTotal?.carId?.thumbnail?.path.includes("base64")
              ? orderTotal?.carId?.thumbnail?.path
              : URL_FOR_IMAGES + orderTotal?.carId?.thumbnail?.path
          }
        />
      </div>
    </div>
  );
};

export default OrderTotalApproving;
