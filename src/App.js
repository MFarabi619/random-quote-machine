import "./App.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#e01919");
  colorArr = [];
  const handleChange = () => {
    setColor("#e0da19");
    console.log("handleChange function called");
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: `${color}`, color: `${color}` }}
      >
        <p></p>
        <Button onClick={handleChange}>New quote</Button>
      </header>
    </div>
  );
}

export default App;
