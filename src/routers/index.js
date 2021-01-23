import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../components/App";
import Films from "../components/Films";
import Residents from "../components/Residents";
import NotFoundPage from "../components/NotFoundPage";
import PlanetDetails from "../components/PlanetDetails";
import history from "../history";
const Router = (props) => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} history={history} />
          <Route
            exact
            path="/planet/:planetId/films"
            component={Films}
            history={history}
          />
          <Route
            exact
            path="/planet/:planetId/residents"
            component={Residents}
            history={history}
          />
          <Route
            exact
            path="/planet:planetId"
            component={PlanetDetails}
            history={history}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
