import React from "react";
import ReactDOM from "react-dom";
import Main from "./common/main";
import Menu from "./common/route";
import RouteTable from "./common/routeprocess";
import { SignUp } from "./common/UserLogin/sign";
import "./index.css";
import Page from "./main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <Page />
    {/* <SignUp/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
