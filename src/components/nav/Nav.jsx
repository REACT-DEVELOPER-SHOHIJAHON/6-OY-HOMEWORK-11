import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import Container from "../../import";

const Nav = () => {
  const [t, i18n] = useTranslation();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const isBlogPage = location.pathname.startsWith("/blog/");

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header
      className={`p-4 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-800"
      } transition-colors duration-300`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className={`h-14 ${darkMode ? "filter invert" : ""}`}
            />
          </Link>

          {!isBlogPage && (
            <h1 className="text-4xl font-extrabold transition-opacity duration-300">
              {t("nav-1")}
            </h1>
          )}

          <div className="flex items-center space-x-6">
            <select
              value={i18n.language}
              onChange={handleChangeLanguage}
              className={`bg-${darkMode ? "gray-700" : "white"} border-${
                darkMode ? "gray-600" : "gray-400"
              } rounded-lg p-3 text-${
                darkMode ? "gray-100" : "gray-800"
              } font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600`}
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div
                className={`w-14 h-8 flex items-center ${
                  darkMode ? "bg-gray-600" : "bg-gray-300"
                } rounded-full p-1`}
              >
                <div
                  className={`w-6 h-6 bg-${
                    darkMode ? "gray-100" : "white"
                  } rounded-full shadow-md transform ${
                    darkMode ? "translate-x-6" : ""
                  } transition-transform`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
