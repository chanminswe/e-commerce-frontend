import React from "react";
import Navbar from "./components/Navbar";
import BuyNow from "./pages/home/BuyNow";
import Collection from "./pages/home/Collection";
import IntroAccessory from "./pages/home/IntroAccessory";
import SeeDetails from "./pages/home/SeeDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BuyNow />
      <Collection />
      <IntroAccessory />
      <SeeDetails />
      <Footer />
    </>
  );
}

export default App;
