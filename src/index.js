import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Oi } from "./Oi";
import { Menu } from "./Menu";
import { Tchau } from "./Tchau";
import { Page404 } from "./Page404";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/oi/:slug" element={<Oi />} />
      <Route path="/oi/a" element={<Tchau />} />
      <Route path="/" element={<App />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
