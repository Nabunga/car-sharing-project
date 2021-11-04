import React from "react";
import "./ModalButton.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postOrder } from "../../store/asyncActions/asyncActions";
import { setActiveIndex } from "../../store/tabs/actions";
import moment from "moment";

const ModalButton = ({ modalBtnClass, modalBtnText, setActive }) => {
  const dispatch = useDispatch();
  const { activeCarInfo } = useSelector((state) => state.carListReducer);
  const {
    selectedColor,
    startDate,
    endDate,
    selectedRate,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = useSelector((state) => state.additionallyReducer);

  let startDateToMs = moment(startDate).valueOf();
  let endDateToMs = moment(endDate).valueOf();

  let history = useHistory();

  const order = {
    orderStatusId: {
      name: "Новые",
      id: "5e26a191099b810b946c5d89",
    },
    cityId: { id: "5ea07c10099b810b946c627a" },
    pointId: { id: "6126c4fb2aed9a0b9b8510f6" },
    carId: { id: activeCarInfo.id },
    color: selectedColor,
    dateFrom: startDateToMs,
    dateTo: endDateToMs,
    rateId: { name: selectedRate },
    price: activeCarInfo.priceMin,
    isFullTank: isFullTank,
    isNeedChildChair: isNeedChildChair,
    isRightWheel: isRightWheel,
  };

  const btnEventHandler = () => {
    if (modalBtnText === "Подтвердить") {
      postOrder(order).then((response) => {
        dispatch({ type: "GET_ORDER", payload: response.data });
        history.push(`/order-page/order-approving/${response.data.data.id}`);
      });
      setActiveIndex(5);
      setActive(false);
    } else if (modalBtnText === "Вернуться") {
      setActive(false);
    }
  };

  return (
    <button className={modalBtnClass} onClick={btnEventHandler}>
      {modalBtnText}
    </button>
  );
};

export default ModalButton;
