import { graphql, useStaticQuery } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import PropTypes from 'prop-types';
import * as React from 'react';
import Footer from '../components/UI/Footer/Footer';
import Nav from '../components/UI/Nav/Nav';
import '../styles/layout.css';
import AppContext from '../utils/context';
import useDeviceDetect from '../utils/useDeviceDetect';

const Layout = ({ children, pageName }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      cvs: allFile(
        filter: { name: { regex: "/^CV[_\\\\-\\\\.]/i" } }
      ) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);
  const { isMobile } = useDeviceDetect();
  const { locale } = useLocalization();
  const cvByLocaleRegex = new RegExp(`[_ -]${locale}`, 'gi');
  const cv = data.cvs.nodes.find((cv) =>
    cvByLocaleRegex.test(cv.name),
  );
  const value = React.useMemo(
    () => ({ isMobile, cv }),
    [isMobile, cv],
  );
  return (
    <AppContext.Provider value={value}>
      <Nav isMobile={isMobile} pageName={pageName} cv={cv} />
      <main>{children}</main>
      <Footer isMobile={isMobile} />
    </AppContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;