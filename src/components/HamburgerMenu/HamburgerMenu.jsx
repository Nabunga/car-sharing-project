import React from "react";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-icon.svg";
import "./HamburgerMenu.scss";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <div className="menu__box">
        <div className="menu-content">
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
          <LanguageSwitch
            divClassName="hamburger__language-box"
            idClassName="hamburger-id"
          />
        </div>
        <div className="slider-opacity"></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
