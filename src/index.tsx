import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import "./assets/styles/fontFace.scss";
import "./assets/styles/utils.scss";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
