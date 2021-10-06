import React, { useState } from "react";
import "./PickDate.scss";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-icon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PickDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="pick-date">
      <label className="pick-date__label">
        С
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showTimeSelect
          dateFormat="dd.MM.yyyy h:mm"
          placeholderText='Введите дату и время'
        />
        <CrossIcon className="pick-date__cross-icon cross-icon_first" />
      </label>
      <label className="pick-date__label" htmlFor="dateTo">
        По
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showTimeSelect
          dateFormat="dd.MM.yyyy h:mm"
          placeholderText='Введите дату и время'
        />
        <CrossIcon className="pick-date__cross-icon cross-icon_second" />
      </label>
    </div>
  );
};

export default PickDate;
