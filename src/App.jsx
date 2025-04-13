import React, { Fragment } from "react";
import './App.css';
import Main from "./Components/Main/Main.jsx";
import Second from "./Components/Second/Second.jsx";
import Third from "./Components/Third/Third.jsx";

export default function App(){
  return (
    <Fragment>
      <Main />
      <Second />
      <Third />
    </Fragment>
  )
}