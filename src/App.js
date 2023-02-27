import React from "react";
import "./App.css";

import { About, Footer, Header, Skills, Work, Test } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Test /> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
