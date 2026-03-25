import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // The timeout forces the desktop browser to wait until React finishes drawing the new page
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 10);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
