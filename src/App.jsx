import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import { U01 } from "./pages/Unidad_01/U01";
function App() {
  return (
    <>
      {/* <NavBar />
      <Home />
      <Services />
      <About />
      <Newsletter />
      <MyFooter /> */}

      <U01 />
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
