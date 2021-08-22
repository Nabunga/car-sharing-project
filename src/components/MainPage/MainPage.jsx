import React from "react";
import "./MainPage.scss";
import { ReactComponent as LocationIcon } from "../../styles/icons/location-icon.svg";
import { ReactComponent as TelegramIcon } from "../../styles/icons/telegram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../styles/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../styles/icons/instagram-icon.svg";
import Carousel from "../Carousel/Carousel";

const MainPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="side-bar">
          <p className="side-bar__lang-switch">Eng</p>
        </div>
        <div className="content">
          <div className="container">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>
              <div className="menu__box">
                <ul className="menu__list">
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
                  <a href="#">
                    <TelegramIcon className="socials__icon" />
                  </a>
                  <a href="#">
                    <FacebookIcon className="socials__icon" />
                  </a>
                  <a href="#">
                    <InstagramIcon className="socials__icon" />
                  </a>
                </div>
                <p className="lang-switch">Eng</p>
              </div>
            </div>
            <header className="header">
              <div>
                <h2 className="header__brand-name brand-name">
                  Need for drive
                </h2>
              </div>
              <div className="location">
                <LocationIcon className="location__icon" />
                <p className="location__city">Ульяновск</p>
              </div>
            </header>
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
              <p className="footer__rights-info">
                © 2016-2019 «Need for drive»
              </p>
            </div>
          </footer>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default MainPage;
