import React from "react";
import Navbar from "./components/Navbar";
import BuyNow from "./pages/home/BuyNow";
import Collection from "./pages/home/Collection";
import IntroAccessory from "./pages/home/IntroAccessory";

function App() {
  return (
    <>
      <Navbar />
      <BuyNow />
      <Collection />
      <IntroAccessory />
    </>
  );
}

export default App;
