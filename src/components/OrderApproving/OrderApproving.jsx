import React from "react";
import "./OrderApproving.scss";
import OrderTotal from "../OrderTotal/OrderTotal";

const OrderApproving = () => {
  let approvingTitle = (
    <h2 className="approving-title">Ваш заказ подтверждён</h2>
  );

  return <OrderTotal orderApprovingTitle={approvingTitle} />;
};

export default OrderApproving;
