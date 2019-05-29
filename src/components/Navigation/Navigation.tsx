import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

import * as ROUTES from "../../constants/routes";
import SignOut from "../SignOut/SignOut";

const Navigation = ({ authUser }: any) =>
  authUser ? <NavigationAuth /> : <NavigationNonAuth />;

const NavigationAuth = () => (
  <div className="p4m-navigation">
    <ul className="p4m-navigation-list">
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className="p4m-navigation">
    <ul className="p4m-navigation-list">
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
