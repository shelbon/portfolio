import React from "react";

const AppContext = React.createContext({
  resizeObserver: null,
  isMobile: undefined,
  cv: undefined,
});

export default AppContext;
