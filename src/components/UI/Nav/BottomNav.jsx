import briefcaseIcon from "@iconify/icons-la/briefcase";
import homeIcon from "@iconify/icons-la/home";
import phoneIcon from "@iconify/icons-la/phone";
import smsIcon from "@iconify/icons-la/sms";
import userIcon from "@iconify/icons-la/user";
import { Icon } from "@iconify/react";
import { LocalizedLink } from "gatsby-theme-i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import { bottomNav, icon, link, text } from "./bottomNav.module.css";

const BottomNav = ({ pageName }) => {
  const { t } = useTranslation("navigation");
  return (
    <nav id={bottomNav} aria-label="Main menu" aria-hidden="false">
      <LocalizedLink className={link} to="/home">
        <Icon icon={homeIcon} className={icon} />
        <p className={text}>{t("home")}</p>
      </LocalizedLink>

      <LocalizedLink className={link} to={`/${pageName}#about`}>
        <Icon icon={userIcon} className={icon} />
        <p className={text}>{t("about")}</p>
      </LocalizedLink>

      <LocalizedLink className={link} to={`/${pageName}#project`}>
        <Icon icon={briefcaseIcon} className={icon} />
        <p className={text}>{t("work")}</p>
      </LocalizedLink>

      <LocalizedLink className={link} to={`/${pageName}#contact`}>
        <Icon icon={smsIcon} className={icon} />
        <p className={text}>{t("contact")}</p>
      </LocalizedLink>

      <a className={link} href="tel:+596696182266">
        <Icon icon={phoneIcon} className={icon} />
        <p className={text}>{t("phone")}</p>
      </a>
    </nav>
  );
};
export default BottomNav;
