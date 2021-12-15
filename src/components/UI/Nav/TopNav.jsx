import { LocalizedLink } from "gatsby-theme-i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  link,
  linkContainer,
  linkText,
  topNav,
  topNavUl,
} from "./topNav.module.css";

const TopNav = ({ cv, pageName }) => {
  const { t } = useTranslation("navigation");
  console.table(cv);
  return (
    <nav id={topNav} aria-hidden="false">
      <ul className={topNavUl}>
        <li className={linkContainer}>
          <LocalizedLink className={link} to="/home">
            <p className={linkText}>{t("home")}</p>
          </LocalizedLink>
        </li>
        <li className={linkContainer}>
          <LocalizedLink className={link} to={`/${pageName}#about`}>
            <p className={linkText}>{t("about")}</p>
          </LocalizedLink>
        </li>
        <li className={linkContainer}>
          <LocalizedLink className={link} to={`/${pageName}#project`}>
            <p className={linkText}>{t("work")}</p>
          </LocalizedLink>
        </li>
        <li className={linkContainer}>
          <LocalizedLink className={link} to={`/${pageName}#contact`}>
            <p className={linkText}>{t("contact")}</p>
          </LocalizedLink>
        </li>
        <li className={linkContainer}>
          {cv && (
            <a
              className={link}
              rel="noopener noreferrer"
              target="_blank"
              href={cv.publicURL}
            >
              <p className={linkText}>{t("resume")}</p>
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default TopNav;
