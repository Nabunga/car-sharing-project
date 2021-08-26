import React from "react";
import "./MainPage.scss";
import Carousel from "../Carousel/Carousel";
import SideBar from "../SideBar/SideBar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import Main from "../Main/Main";
import OrderButton from "../OrderButton/OrderButton";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <HamburgerMenu />
        <div className="content">
          <header className="header">
            <Header />
          </header>
          <main className="main">
            <Main />
            <OrderButton />
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
