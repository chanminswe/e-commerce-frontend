import React from "react";
import Navbar from "./components/Navbar";
import BuyNow from "./pages/home/BuyNow";
import Collection from "./pages/home/Collection";
import IntroAccessory from "./pages/home/IntroAccessory";
import SeeDetails from "./pages/home/SeeDetails";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <BuyNow />
        <Collection />
        <IntroAccessory />
        <SeeDetails />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
