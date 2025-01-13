import React from "react";
import Navbar from "./components/Navbar";
import BuyNow from "./pages/home/BuyNow";
import Collection from "./pages/home/Collection";
import IntroAccessory from "./pages/home/IntroAccessory";
import SeeDetails from "./pages/home/SeeDetails";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home/Home";
import ScreenContextProvider from "./context/ScreenContextProvider";

function App() {
  return (
    <>
      <Provider store={store}>
        <ScreenContextProvider >
          <Navbar />
          <Home />
          <Footer />
        </ScreenContextProvider>
      </Provider>
    </>
  );
}

export default App;

