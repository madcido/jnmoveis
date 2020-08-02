import React from "react";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import * as data from "./data";
import logo from "./assets/logo/logoG.png";

function App() {
  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Slider width="100%" height="400px" slides={data.firstSlider} />
    </>
  );
}

export default App;
