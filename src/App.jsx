import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home/Home";
import ScreenContextProvider from "./context/ScreenContextProvider";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <ScreenContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path={`/product/${title}`} element={prod}/>
          </Routes>
          <Footer />
        </ScreenContextProvider>
      </Provider>
    </>
  );
}

export default App;
