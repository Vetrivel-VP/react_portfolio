import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Alert from "./Alert";

// Custom Components
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Alert />

    <MainContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
