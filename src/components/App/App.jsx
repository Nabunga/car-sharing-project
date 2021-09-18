import React from "react";
import "../../styles/reset.scss";
import MainPage from "../MainPage/MainPage";
import OrderPage from "../OrderPage/OrderPage";
import OrderPageStepTwo from "../OrderPageStepTwo/OrderPageStepTwo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/car-sharing-project' exact component={MainPage} />
        <Route path="/order-page/location" exact component={OrderPage} />
        <Route path="/order-page/model" exact component={OrderPageStepTwo} />
      </Switch>
    </Router>
  );
};

export default App;
