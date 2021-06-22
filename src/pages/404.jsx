import { LocalizedLink as Link } from "gatsby-theme-i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/seo";
import Layout from "../templates/layout";
import AppContext from "../utils/context";
import {
  errorCta,
  errorMessage,
  mainContent,
  title,
  wrapper,
} from "./404.module.css";

const NotFoundPage = () => {
  const { t } = useTranslation("404");
  return (
    <Layout>
      <SEO title="404: Not found" />
      <AppContext.Consumer>
        {({ isMobile, cv }) => (
          <div
            className={wrapper}
            style={{
              marginTop: !isMobile ? "calc(var(--nav-height)*1.5)" : 0,
            }}
          >
            <h1 className={title}>40</h1>
            {/* <img
              src={pageNotFoundIllustration}
              alt="page not found"
            /> */}
            <div className={mainContent}>
              <p className={errorMessage}>{t("title")}</p>
            </div>
            <Link className={` button ${errorCta}`} to="/home">
              <p>{t("redirect.link")}</p>
            </Link>
          </div>
        )}
      </AppContext.Consumer>
    </Layout>
  );
};

export default NotFoundPage;
