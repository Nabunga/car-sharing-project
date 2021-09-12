import React from "react";
import "../../styles/reset.scss";
import MainPage from "../MainPage/MainPage";
import OrderPage from "../OrderPage/OrderPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path="/order-page" exact component={OrderPage} />
      </Switch>
    </Router>
  );
};

export default App;
