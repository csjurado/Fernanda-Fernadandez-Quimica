import React from "react";
import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import MyFooter from "../components/MyFooter";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const Inicio = () => {
  return (
    <>
      <Layout />
      <Home />
      <Services />
      <About />
      <Newsletter />
      <MyFooter />
      <Outlet />
    </>
  );
};

export default Inicio;
