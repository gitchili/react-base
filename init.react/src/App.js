import React, { Component } from "react";
import Title from "./Components/Head/Title";
import "./App.css";
import SandBox from "./Components/SandBox";

class App extends Component {
  /*************************************************************************
   * component lifecycle 
   *************************************************************************/


  /*************************************************************************
   * event handlers
   *************************************************************************/


  /*************************************************************************
   * rendering 
   *************************************************************************/
  render() {
    return (
      <div className="App">
       <Title />
       <SandBox />
      </div>
    );
  }
}

export default App; //root component gets rendered inside index.js
