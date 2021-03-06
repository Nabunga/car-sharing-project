import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import SideBar from "../SideBar/SideBar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ButtonMainPage from "../ButtonMainPage/ButtonMainPage";

const MainPage = () => {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <HamburgerMenu sliderOpacity="slider-opacity_main-page" />
        <div className="content">
          <header className="header">
            <Header />
          </header>
          <main className="main">
            <Main />
            <Link to="/order-page/location">
              <ButtonMainPage className="order-button" text="Забронировать" />
            </Link>
          </main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default MainPage;
