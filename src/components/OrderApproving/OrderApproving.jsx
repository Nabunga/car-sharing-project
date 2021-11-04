import React from "react";
import "./OrderApproving.scss";
import OrderTotalApproving from '../OrderTotalApproving/OrderTotalApproving';

const OrderApproving = () => {
  let approvingTitle = (
    <h2 className="approving-title">Ваш заказ подтверждён</h2>
  );

  return <OrderTotalApproving orderApprovingTitle={approvingTitle} />;
};

export default OrderApproving;
