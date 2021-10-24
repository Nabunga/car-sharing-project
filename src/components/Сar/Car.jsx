import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCard, setActiveCarInfo } from "../../store/model/actions";
import { URL_FOR_IMAGES } from "../../axios/api";

const Car = () => {
  const dispatch = useDispatch();
  const { activeCard, carList } = useSelector((state) => state.carListReducer);

  const renderedCarList = carList.map((car) => {
    return (
      <div
        className={activeCard === car.id ? "info info-active" : "info"}
        key={car.id}
        onClick={() => {
          dispatch(setActiveCard(car.id));
          dispatch(setActiveCarInfo(car));
        }}
      >
        <div className="info-content">
          <h3 className="info-title">{car.name}</h3>
          <p className="info-price">
            {car.priceMin} - {car.priceMax}
          </p>
          <img
            className="info-img"
            src={
              car.thumbnail.path.includes("base64")
                ? car.thumbnail.path
                : URL_FOR_IMAGES + car.thumbnail.path
            }
            alt="car"
          />
        </div>
      </div>
    );
  });

  return renderedCarList;
};

export default Car;
