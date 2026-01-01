import { useEffect, useState } from "react";

/**
 * Hook to track the current screen width
 * Used for responsive behavior in components
 *
 * Breakpoints:
 * - sm: 640px
 * - md: 768px
 * - lg: 1024px
 * - xl: 1280px
 */
export function useScreenSize(): number {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }

    function handleResize() {
      setScreenSize(getScreenSize());
    }

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

/**
 * Returns boolean flags for common breakpoints
 */
export function useBreakpoints() {
  const size = useScreenSize();

  return {
    isMobile: size > 0 && size < 640,
    isSmall: size >= 640,
    isMedium: size >= 768,
    isLarge: size >= 1024,
    isXLarge: size >= 1280,
  };
}
