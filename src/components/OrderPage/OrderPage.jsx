import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import OrderTabs from "../OrderTabs/OrderTabs";

const OrderPage = () => {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <HamburgerMenu sliderOpacity='slider-opacity_order-page'/>
        <div className="content">
          <header className="header">
            <Header />
          </header>
          <nav className='order-page__nav'>
            <OrderTabs />
          </nav>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
