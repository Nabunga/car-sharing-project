import React from "react";
import "./ModalButton.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postOrder } from "../../store/asyncActions/asyncActions";
import { setActiveIndex } from "../../store/tabs/actions";

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

  let history = useHistory();

  const order = {
    orderStatusId: {
      name: "Новые",
      id: "5e26a191099b810b946c5d89",
    },
    cityId: { id: "5ea07c10099b810b946c627a" },
    pointId: { id: "6126c4fb2aed9a0b9b8510f6" },
    carId: activeCarInfo.id,
    color: { type: selectedColor },
    dateFrom: { startDate },
    dateTo: { endDate },
    rateId: { selectedRate },
    price: { isFullTank },
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
