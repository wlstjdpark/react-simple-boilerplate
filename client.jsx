import React from "react";
import ReactDOM from "react-dom";
import Test from "./test";
import { hot } from "react-hot-loader/root";

const Hot = hot(Test);
ReactDOM.render(<Hot />, document.querySelector("#root"));
