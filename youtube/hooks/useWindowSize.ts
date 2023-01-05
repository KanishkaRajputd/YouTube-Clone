import { useState, useEffect } from "react";
type windowSize = {
  width: number;
  height: number;
};
function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSize>();

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
export default useWindowSize;
