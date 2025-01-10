import React from "react";
import Navbar from "./components/Navbar";
import BuyNow from "./pages/home/BuyNow";
import Collection from "./pages/home/Collection";

function App() {
  return (
    <>
      <Navbar />
      <BuyNow />
      <Collection />
    </>
  );
}

export default App;
