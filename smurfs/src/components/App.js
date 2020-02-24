import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import AddSmurf from "./AddSmurf";
import PutSmurf from "./PutSmurf";
import DeleteSmurf from "./DeleteSmurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Such Smurf Very Blue</h1>
        <SmurfForm/>
        <AddSmurf/>
        <PutSmurf/>
        <DeleteSmurf/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
