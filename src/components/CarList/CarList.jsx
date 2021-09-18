import React from "react";
import "./CarList.scss";
import elantra from "../../assets/img/elantra.png";
import i30n from "../../assets/img/i30n.png";
import creta from "../../assets/img/creta.png";
import sonata from "../../assets/img/sonata.png";

const CarList = () => {
  return (
    <div className="car-list">
      <div className="car-list__info">
        <div className="info-content">
          <h3 className="info-title">Elantra</h3>
          <p className="info-price">12 000 - 25 000 ₽</p>
          <img className="info-img" src={elantra} alt="elantra" />
        </div>
      </div>
      <div className="car-list__info">
        <div className="info-content">
          <h3 className="info-title">i30 N</h3>
          <p className="info-price">10 000 - 32 000 ₽</p>
          <img className="info-img" src={i30n} alt="i30n" />
        </div>
      </div>
      <div className="car-list__info">
        <div className="info-content">
          <h3 className="info-title">Creta</h3>
          <p className="info-price">12 000 - 25 000 ₽</p>
          <img className="info-img" src={creta} alt="creta" />
        </div>
      </div>
      <div className="car-list__info">
        <div className="info-content">
          <h3 className="info-title">Sonata</h3>
          <p className="info-price">10 000 - 32 000 ₽</p>
          <img className="info-img" src={sonata} alt="sonata" />
        </div>
      </div>
      <div className="car-list__info">
        <div className="info-content">
          <h3 className="info-title">Sonata</h3>
          <p className="info-price">10 000 - 32 000 ₽</p>
          <img className="info-img" src={sonata} alt="sonata" />
        </div>
      </div>
      <div className="car-list__info">
        <div className="info-content">
          <h3 className="info-title">Sonata</h3>
          <p className="info-price">10 000 - 32 000 ₽</p>
          <img className="info-img" src={sonata} alt="sonata" />
        </div>
      </div>
      <div className="car-list__info">
        <div className="info-content">
          <h3 className="info-title">Sonata</h3>
          <p className="info-price">10 000 - 32 000 ₽</p>
          <img className="info-img" src={sonata} alt="sonata" />
        </div>
      </div>
    </div>
  );
};

export default CarList;
