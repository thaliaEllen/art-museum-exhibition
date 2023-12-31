import { useState, useEffect } from "react";

interface IWindowDimentions {
  width: number;
  height: number;
}

function getWindowDimensions(): IWindowDimentions {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): IWindowDimentions {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimentions>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
