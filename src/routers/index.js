import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import PlanetForm from "../components/PlanetForm";
import NotFoundPage from "../components/NotFoundPage";
import history from "../history";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} history={history} />
        <Route exact strict path="/form/:id?" render={() => <PlanetForm />} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
