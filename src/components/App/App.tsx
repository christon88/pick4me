import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Landing from "../Landing/Landing";
import SignIn from "../SignIn/SignIn";
import Home from "../Home/Home";
import Account from "../Account/Account";
import Admin from "../Admin/Admin";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ACCOUNT} component={Account} />
      <Route exact path={ROUTES.ADMIN} component={Admin} />
    </div>
  </Router>
);

export default App;
