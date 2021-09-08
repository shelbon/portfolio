import bars from "@iconify/icons-la/bars";
import times from "@iconify/icons-la/times";
import { Icon } from "@iconify/react";
import { LocalizedLink } from "gatsby-theme-i18n";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useToggle from "../../../hooks/useToggle";
import {
  hideUl,
  link,
  linkContainer,
  linkText,
  mobileMode,
  navBarToggle,
  navBarToggleIcon,
  navBarToggleOpen,
  topNav,
  topNavUl,
} from "./topNav.module.css";

const TopNav = ({ cv, pageName }) => {
  const { t } = useTranslation("navigation");
  const [value, toggleValue] = useToggle(false);

  return (
    <nav id={topNav} className={value ? mobileMode : ""} aria-hidden="false">
      <button
        type="button"
        className={`reset-button-style ${navBarToggle} ${
          value ? navBarToggleOpen : ""
        }`}
        onClick={() => {
          toggleValue(!value);
        }}
      >
        <Icon icon={value ? times : bars} className={navBarToggleIcon} />
      </button>
      <ul className={`${topNavUl} ${!value ? hideUl : ""}`}>
        <li className={linkContainer}>
          <LocalizedLink
            className={link}
            to="/home"
            onClick={() => {
              if (value) {
                toggleValue(!value);
              }
            }}
          >
            <p className={linkText}>{t("home")}</p>
          </LocalizedLink>
        </li>
        <li className={linkContainer}>
          <LocalizedLink
            className={link}
            to={`/${pageName}#about`}
            onClick={() => {
              if (value) {
                toggleValue(!value);
              }
            }}
          >
            <p className={linkText}>{t("about")}</p>
          </LocalizedLink>
        </li>
        <li className={linkContainer}>
          <LocalizedLink
            className={link}
            to={`/${pageName}#project`}
            onClick={() => {
              if (value) {
                toggleValue(!value);
              }
            }}
          >
            <p className={linkText}>{t("work")}</p>
          </LocalizedLink>
        </li>
        <li className={linkContainer}>
          <LocalizedLink
            className={link}
            to={`/${pageName}#contact`}
            onClick={() => {
              if (value) {
                toggleValue(!value);
              }
            }}
          >
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
              onClick={() => {
                if (value) {
                  toggleValue(!value);
                }
              }}
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
