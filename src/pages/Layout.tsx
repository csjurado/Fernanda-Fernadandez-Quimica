import React from "react";
import { useEffect, useState } from "react";

import biologia from "../assets/biologia.png";
// import { Link } from "react-scroll";
import { Routes, Route, Link, Outlet } from "react-router-dom";

// Iconos de React

import { FaXmark, FaBars } from "react-icons/fa6";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { U01 } from "./Unidad_01/U01";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set Tootgle Menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  // Navitems array
  const navItems = [
    {
      link: "Unidad 1: Ecuaciones Químicas",
      path: "/unidad-01-ecuaciones-quimicas",
    },
    { link: "Unidad 2", path: "unidad-2" },
    { link: "Unidad 3", path: "unidad-3" },
    { link: "Unidad 4", path: "unidad-4" },
    { link: "Unidad 5", path: "unidad-5" },
    { link: "Unidad 6", path: "unidad-6" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/">
            <a
              // href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={biologia}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-[#263238]">Fernanda Fernandez</span>
            </a>
          </Link>
          {/* Nav Items para  */}

          {/* <ul className=" md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {" "}
                {link}
              </Link>
            ))}
          </ul> */}
          <ul className=" md:flex space-x-10 hidden">
            <li className="block text-sm text-gray900 hover:text-brandPrimary first:font-medium">
              <Link to="/01-ecuaciones-quimicas">Ecuaciones Químicas </Link>
            </li>
            <a className="block text-sm text-gray900 hover:text-brandPrimary first:font-medium">
              Reacciones Químicas
            </a>
            <a className="block text-sm text-gray900 hover:text-brandPrimary first:font-medium">
              El estado gaseoso y sus leyes
            </a>
            <a className="block text-sm text-gray900 hover:text-brandPrimary first:font-medium">
              El estado líquido y los sistemas dispersos
            </a>
            <a className="block text-sm text-gray900 hover:text-brandPrimary first:font-medium">
              Cinética y equilibrio químico
            </a>
            <a className="block text-sm text-gray900 hover:text-brandPrimary first:font-medium">
              Ácidos y bases
            </a>
          </ul>
          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded  hover:bg-neutralDGrey">
              Sign up
            </button>
          </div>
          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text:gtay-500"
            >
              {isMenuOpen ? (
                <FaXmark className=" h-6 w-6" />
              ) : (
                <FaBars className=" h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={` space-y-5 px-4 mt-16 py-6 bg-brandPrimary ${
          isMenuOpen ? "block fixed top-5 right-0 left-0 " : "hidden"
        }`}
      >
        {" "}
        {/* {navItems.map(({ link, path }) => (
          <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            key={path}
            className="block text-sm text-gray900 hover:text-white first:font-medium"
          >
            {" "}
            {link}
          </Link>
        ))} */}
      </div>
      {/* <Routes>
        <Route path="/" element={<U01 />} />
      </Routes> */}
      <Outlet />
    </header>
  );
};

export default Layout;
