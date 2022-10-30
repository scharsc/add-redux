import React from "react";
import ReactDOM from "react-dom/client";
import "./mystyle.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Database from "./database";
import App from "./components/App";

const textContainer = document.getElementById("root")!;

const textRenderRoot = ReactDOM.createRoot(textContainer);

//  render
textRenderRoot.render(
  <Provider store={store}>
    <App/>
  </Provider>
);