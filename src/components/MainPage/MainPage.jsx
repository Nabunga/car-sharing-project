import React from "react";
import "./MainPage.scss";
import { ReactComponent as LocationIcon } from "../../styles/icons/location-icon.svg";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>

            <ul className="menu__box">
              <li>
                <a className="menu__item" href="#">
                  Парковка
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  Страховка
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  Бензин
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  Обслуживание
                </a>
              </li>
            </ul>
            <div className="socials">
              <i className="socials__icon"></i>
              <i className="socials__icon"></i>
              <i className="socials__icon"></i>
            </div>
          </div>
          <h2 className="header__brand-name brand-name">Need for drive</h2>
        </header>
        <section className="location">
          <LocationIcon className="location__icon" />
          <p className="location__city">Ульяновск</p>
        </section>
        <main className="main">
          <h1 className="main__header">Каршеринг</h1>
          <h2 className="main__brand-name brand-name">Need for drive</h2>
          <p className="main__text">Поминутная аренда авто твоего города</p>
        </main>
      </div>
      <section className="order-button">
        <button className="order-button__btn">Забронировать</button>
      </section>
      <footer className="footer">
        <div className="footer__container container">
          <p className="footer__phone">8 (495) 234-22-44</p>
          <p className="footer__rights-info">© 2016-2019 «Need for drive»</p>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
