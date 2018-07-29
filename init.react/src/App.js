import React, { Component } from "react";
import Title from "./Components/Title";
import "./App.css";

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
      </div>
    );
  }
}

export default App; //root component gets rendered inside index.js
