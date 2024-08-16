import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import HomePage from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/app" element={<App></App>}></Route>
      <Route path="/test" element={<HomePage></HomePage>}></Route>
    </Routes>
  </BrowserRouter>
);
