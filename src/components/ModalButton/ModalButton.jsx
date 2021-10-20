import React from "react";
import "./ModalButton.scss";
import { Link } from "react-router-dom";

const ModalButton = ({ modalBtnRoute, modalBtnClass, modalBtnText }) => {
  return (
    <Link to={modalBtnRoute}>
      <button className={modalBtnClass}>{modalBtnText}</button>
    </Link>
  );
};

export default ModalButton;
