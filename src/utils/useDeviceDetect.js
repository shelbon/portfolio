import React from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(undefined);

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Nokia|Opera Mini|IEMobile|WPDesktop|Silk/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}
