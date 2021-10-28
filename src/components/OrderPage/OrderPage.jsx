import React, { useState } from "react";
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
import Modal from "../Modal/Modal";
import ModalButton from "../ModalButton/ModalButton";
import OrderApproving from "../OrderApproving/OrderApproving";
import OrderNumberApproving from "../OrderNumberApproving/OrderNumberApproving";

const OrderPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="wrapper">
        <Modal active={modalActive} setActive={setModalActive}>
          <h2 className="modal__header">Подтвердить заказ</h2>
          <div className="modal__btn-group">
            <ModalButton modalBtnClass="accepted" modalBtnText="Подтвердить" />
            <ModalButton
              modalBtnClass="rejected"
              modalBtnText="Вернуться"
              setActive={setModalActive}
            />
          </div>
        </Modal>
        <SideBar />
        <HamburgerMenu sliderOpacity="slider-opacity_order-page" />
        <div className="order-page__content">
          <header className="header order-page__header">
            <Header />
          </header>
          <nav className="order-page__nav">
            <Switch>
              <Route path="/order-page/location" exact component={OrderTabs} />
              <Route path="/order-page/model" exact component={OrderTabs} />
              <Route
                path="/order-page/additionally"
                exact
                component={OrderTabs}
              />
              <Route path="/order-page/total" exact component={OrderTabs} />
              <Route
                path="/order-page/order-approving"
                component={OrderNumberApproving}
              />
            </Switch>
          </nav>
          <main>
            <div className="main__content">
              <Switch>
                <Route
                  path="/order-page/location"
                  exact
                  component={OrderLocation}
                />
                <Route path="/order-page/model" exact component={OrderModel} />
                <Route
                  path="/order-page/additionally"
                  exact
                  component={OrderAdditionally}
                />
                <Route path="/order-page/total" component={OrderTotal} />
                <Route
                  path="/order-page/order-approving"
                  component={OrderApproving}
                />
              </Switch>
              <OrderDetails setActive={setModalActive} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
