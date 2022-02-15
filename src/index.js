import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
/* import CounterApp from "./CounterApp"; */
import "./index.css";
import CounterApp from "./CounterApp";

const app = document.querySelector("#app");

ReactDOM.render(<CounterApp value={13} />, app);
