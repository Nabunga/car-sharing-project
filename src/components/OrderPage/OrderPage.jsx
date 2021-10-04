import React from "react";
import "./OrderPage.scss";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import OrderLocation from "../OrderLocation/OrderLocation";
import OrderDetails from "../OrderDetails/OrderDetails";
import { Switch, Route } from "react-router-dom";
import OrderModel from "../OrderModel/OrderModel";
import OrderAdditionally from "../OrderAdditionally/OrderAdditionally";
import OrderTotal from "../OrderTotal/OrderTotal";

const OrderPage = () => {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <HamburgerMenu sliderOpacity="slider-opacity_order-page" />
        <div className="order-page__content">
          <header className="header order-page__header">
            <Header />
          </header>
          <nav className="order-page__nav">
            <OrderTabs />
          </nav>
          <main>
            <div className="main__content">
              <Switch>
                <Route
                  path="/order-page/location"
                  exact
                  component={OrderLocation}
                />
                <Route 
                  path="/order-page/model" 
                  exact 
                  component={OrderModel} />
                <Route
                  path="/order-page/additionally"
                  exact
                  component={OrderAdditionally}
                />
                <Route
                  path="/order-page/total"
                  exact
                  component={OrderTotal}
                />
              </Switch>
              <OrderDetails />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
