import "./App.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import React, { useState, useEffect } from "react";
import { colorArray } from "./colors";

let quotesDBUrl =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [color, setColor] = useState(colorArray[0]);
  const [quoteArray, setQuoteArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuoteArray(parsedJSON.quotes);
  };

  useEffect(() => {
    fetchQuotes(quotesDBUrl);
  }, [quotesDBUrl]);

  const [quote, setQuote] = useState("some text");
  const [author, setAuthor] = useState("some author");

  const handleChange = () => {
    let randomColor =
      colorArray[Math.floor(Math.random() * (colorArray.length - 1))];

    setColor(randomColor);

    let quoteIndex = Math.floor(Math.random() * (quoteArray.length - 1));

    let randomQuote = quoteArray[quoteIndex].quote;

    setQuote(randomQuote);
    setAuthor(quoteArray[quoteIndex].author);
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: `${color}`, color: `${color}` }}
      >
        <wrapper id="quote-box">
          <p id="text">
            <i className="fa fa-quote-left"></i>
            <span> </span>
            {quote}
          </p>
          <p id="author">- {author}</p>
          <div className="buttons">
            <a
              id="tweet-quote"
              href={encodeURI(
                `http://www.twitter.com/intent/tweet?text="${quote}" \n\n - ${author}`
              )}
            >
              <Button className="tweet-button">
                <i className="fa fa-twitter"></i>
              </Button>
            </a>
            <Button id="new-quote" onClick={handleChange}>
              New quote
            </Button>
          </div>
        </wrapper>
        <p className="credits">By Mumtahin Farabi</p>
      </header>
    </div>
  );
}

export default App;
