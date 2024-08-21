import React from "react";
import { useTranslation } from "react-i18next";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import figma from "../../assets/figma.svg";
import { Link } from "react-router-dom";
import Container from "../../import";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-center md:text-left text-lg font-medium">
            {t("footer-1")}{" "}
            <Link
              className="text-orange-400 hover:text-orange-300 transition-colors"
              to="/terms"
            >
              {t("footer-2")}
            </Link>
          </p>

          <Link
            className="text-center md:text-left text-lg font-medium"
            to="mailto:gblog@gmail.com"
          >
            gblog@gmail.com
          </Link>

          <div className="flex space-x-4">
            <Link to="https://twitter.com" aria-label="Twitter">
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6 hover:opacity-75 transition-opacity"
              />
            </Link>
            <Link to="https://github.com" aria-label="GitHub">
              <img
                src={github}
                alt="GitHub"
                className="w-6 h-6 hover:opacity-75 transition-opacity"
              />
            </Link>
            <Link to="https://www.figma.com" aria-label="Figma">
              <img
                src={figma}
                alt="Figma"
                className="w-6 h-6 hover:opacity-75 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
