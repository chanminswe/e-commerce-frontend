import React, { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext();

function ScreenContextProvider({ children }) {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  //to change the screensize according to user
  //also clean up the event listener
  useEffect(() => {
    function changeScreen() {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", changeScreen);

    return () => {
      window.removeEventListener("resize", changeScreen);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ setScreenSize, screenSize }}>
      {children}
    </ScreenContext.Provider>
  );
}

export default ScreenContextProvider;
