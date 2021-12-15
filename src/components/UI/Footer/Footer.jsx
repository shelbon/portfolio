import React from "react";
import { useTranslation } from "react-i18next";
import { footer, text } from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation("home");

  return (
    <footer>
      <p className={text}>
        © {new Date().getFullYear()} {t("footer")}
      </p>
    </footer>
  );
};
export default Footer;
