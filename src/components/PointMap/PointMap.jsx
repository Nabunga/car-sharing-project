import React from "react";
import map from "../../assets/img/map.png";

const PointMap = () => {
  return (
    <>
      <p className="input-label">Выбрать на карте:</p>
      <img className="order__map-image" src={map} alt="map" />
    </>
  );
};

export default PointMap;
