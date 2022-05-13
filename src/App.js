/* eslint-disable no-unused-vars */
import React from "react";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { productData, productDataTwo } from "./components/Products/data";

import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
