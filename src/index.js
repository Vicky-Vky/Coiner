import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import "./style.scss";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Phone from "./components/Mobilesignup";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Title></Title>} />
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/phone" element={<Phone></Phone>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/:id" element={<Show />} />
    </Routes>
  </BrowserRouter>
);
