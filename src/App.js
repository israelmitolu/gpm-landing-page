import React from "react";
import {
  About,
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
} from "./containers";

import { Brand, Navbar, Cta } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <About></About>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default App;
