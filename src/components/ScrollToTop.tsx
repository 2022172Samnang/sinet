// src/components/utils/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if the element exists before trying to scroll it,
    // or just scroll the window directly.
    // For general page scroll, window is usually what you want.
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use 'instant' for immediate scroll without smooth animation
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]); // Re-run effect when pathname changes

  return null; // This component does not render anything to the DOM
};

export default ScrollToTop;
