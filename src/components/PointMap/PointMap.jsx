import React from "react";
import '../OrderLocation/OrderLocation.scss';
import { YMapContainer } from "./YMapContainer";

const PointMap = () => {
  return (
    <>
      <p className="input-label">Выбрать на карте:</p>
      <YMapContainer />
    </>
  );
};

export default PointMap;
