import React from "react";
import "./CarList.scss";
import { useSelector, useDispatch } from "react-redux";
import { URL_FOR_IMAGES } from "../../axios/api";
import { setActiveCard, setSelectedCar } from "../../store/model/actions";

const CarList = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.carListReducer.carList);
  const activeCard = useSelector((state) => state.carListReducer.activeCard);
  const selectedCategory = useSelector(
    (state) => state.carListReducer.selectedCategory
  );
  const carListByCategory = useSelector(
    (state) => state.carListReducer.carListByCategory
  );

  const renderedCarList = carList.map((car) => {
    return (
      <div
        className={activeCard === car.id ? "info info-active" : "info"}
        key={car.id}
        onClick={() => {
          dispatch(setSelectedCar(car.name));
          dispatch(setActiveCard(car.id));
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

  const renderedCarListByCategory = carListByCategory.map((car) => {
    return (
      <div
        className={activeCard === car.id ? "info info-active" : "info"}
        key={car.id}
        onClick={() => {
          dispatch(setSelectedCar(car.name));
          dispatch(setActiveCard(car.id));
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

  return selectedCategory === "Все" ? (
    <div className="car-list">{renderedCarList}</div>
  ) : (
    <div className="car-list">{renderedCarListByCategory}</div>
  );
};

export default CarList;
