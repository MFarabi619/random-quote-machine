import "./App.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import React, { useState } from "react";
import { colorArray } from "./colors";
import { quoteArray } from "./quotes";

function App() {
  const [color, setColor] = useState(colorArray[0]);
  const [quote, setQuote] = useState(
    quoteArray[Math.floor(Math.random() * (quoteArray.length - 1))].quote
  );
  const [author, setAuthor] = useState(
    quoteArray[Math.floor(Math.random() * (quoteArray.length - 1))].author
  );

  const handleChange = () => {
    let randomColor =
      colorArray[Math.floor(Math.random() * (colorArray.length - 1))];

    setColor(randomColor);

    let quoteIndex = Math.floor(Math.random() * (quoteArray.length - 1));
    let randomQuote = quoteArray[quoteIndex].quote;

    setQuote(randomQuote);
    setAuthor(quoteArray[quoteIndex].author);
    console.log("handleChange function called");
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: `${color}`, color: `${color}` }}
      >
        <div className="quote-box">
          <p className="quote-text">{quote}</p>
          <p className="author">- {author}</p>
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
