import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Inicio from "./pages/Inicio";
import Layout from "./pages/Layout";
import U00 from "./pages/Unidad_01/U00";
import { U01 } from "./pages/Unidad_01/U01";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <NavBar />
      <Home />
      <Services />
      <About />
      <Newsletter />
      <MyFooter /> */}

      {/* <U01 /> */}

      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/01-ecuaciones-quimicas" element={<U00 />}></Route>
        <Route path="/01-masa-molar-numero-avogadro" element={<U01 />}></Route>
      </Routes>
    </>
  );
}

export default App;
