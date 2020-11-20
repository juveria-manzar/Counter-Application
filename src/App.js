import React, { Component } from "react";
import "./App.css";

import FirstComponent from './components/FirstComponent'

//Class Component
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <FirstComponent/>
      </div>
    );
  }
}

//Function Component


export default App;
