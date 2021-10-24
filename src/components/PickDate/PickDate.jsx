import React, { useState } from "react";
import "./PickDate.scss";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { setStartDate, setEndDate } from "../../store/additionally/actions";

const PickDate = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.additionallyReducer);

  return (
    <div className="pick-date">
      <label className="pick-date__label">
        С
        <DatePicker
          selected={startDate}
          onChange={(date) => dispatch(setStartDate(date))}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showTimeSelect
          dateFormat="dd.MM.yyyy h:mm"
          placeholderText='Введите дату и время'
        />
        <CrossIcon className="pick-date__cross-icon cross-icon_first" onClick={() => dispatch(setStartDate(null))}/>
      </label>
      <label className="pick-date__label" htmlFor="dateTo">
        По
        <DatePicker
          selected={endDate}
          onChange={(date) => dispatch(setEndDate(date))}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showTimeSelect
          dateFormat="dd.MM.yyyy h:mm"
          placeholderText='Введите дату и время'
        />
        <CrossIcon className="pick-date__cross-icon cross-icon_second" onClick={() => dispatch(setEndDate(null))}/>
      </label>
    </div>
  );
};

export default PickDate;
