import React from "react";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-icon.svg";
import "./HamburgerMenu.scss";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const HamburgerMenu = ({ sliderOpacity }) => {
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
              <button className="menu__item" href="#">
                Парковка
              </button>
            </li>
            <li>
              <button className="menu__item" href="#">
                Страховка
              </button>
            </li>
            <li>
              <button className="menu__item" href="#">
                Бензин
              </button>
            </li>
            <li>
              <button className="menu__item" href="#">
                Обслуживание
              </button>
            </li>
          </ul>
          <div className="socials">
            <button href="#">
              <TelegramIcon className="socials__icon" />
            </button>
            <button href="#">
              <FacebookIcon className="socials__icon" />
            </button>
            <button href="#">
              <InstagramIcon className="socials__icon" />
            </button>
          </div>
          <LanguageSwitch
            divClassName="hamburger__language-box"
            idClassName="hamburger-id"
          />
        </div>
        <div className={sliderOpacity}></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
