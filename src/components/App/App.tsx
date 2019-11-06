import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "firebase/auth";

import Navigation from "../Navigation/Navigation";
import Landing from "../Landing/Landing";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Account from "../Account/Account";
import Admin from "../Admin/Admin";

import * as ROUTES from "../../constants/routes";
import PasswordForget from "../PasswordForget/PasswordForget";
import useAuth from "../Session/useAuth";
import { userContext } from "../Session";

const App = () => {
  const { initializing, user } = useAuth();
  if (initializing) {
    return <div>Loading</div>;
  }
  return (
    <userContext.Provider value={{ user }}>
      <Router>
        <div>
          <Navigation />

          <hr />

          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ACCOUNT} component={Account} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForget}
          />
        </div>
      </Router>
    </userContext.Provider>
  );
};

export default App;
