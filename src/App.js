import "./App.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import React, { useState } from "react";
import { colorArray } from "./colors";

function App() {
  const [color, setColor] = useState(colorArray[0]);
  const [quote, setQuote] = useState("This is some text to be displayed");

  const handleChange = () => {
    setColor(colorArray[Math.floor(Math.random() * colorArray.length - 1)]);
    setQuote("You don't get what you want, you get what you work for");
    console.log("handleChange function called");
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: `${color}`, color: `${color}` }}
      >
        <div className="quote-box">
          {quote}
          <Button className="quote-button" onClick={handleChange}>
            New quote
          </Button>
        </div>
        <p className="credits">By Mumtahin Farabi</p>
      </header>
    </div>
  );
}

export default App;
