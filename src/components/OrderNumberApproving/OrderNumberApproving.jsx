import React from "react";
import "./OrderNumberApproving.scss";

const OrderNumberApproving = () => {

  let currentUrl = window.location.pathname;
  var idOrder = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);

  return (
    <div className="tabs">
      <h3 className="order-number__value">
        Заказ номер {idOrder}
      </h3>
    </div>
  );
};

export default OrderNumberApproving;
