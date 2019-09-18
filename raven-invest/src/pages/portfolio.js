import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import _ from "lodash";
//there is a call limit. 5 per min. 500 per day
// for the reccomendation thing, reset back to default values beore api call
function Portfolio() {
  const [rec, setRec] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [ticker, setTicker] = useState(" ");
  const [btnVal, setBtnval] = useState(false);
  const key = "X3NP9R0INXUALP1Z";

  function handleClick(e) {
    e.preventDefault();
    setBtnval(!btnVal);
  }
  //button request
  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${ticker}&apikey=${key}`
      )
      .then(result => {
        result.data["Stock Quotes"].map(item => {
          setStocks([
            ...stocks,
            {
              symbol: item["1. symbol"],
              price: item["2. price"],
              volume: item["3. volume"],
              timestamp: item["4. timestamp"]
            }
          ]);
        });
      });
  }, [btnVal]);
  ///search request yes
  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${key}`
      )
      .then(match => {
        console.log(match.data.bestMatches);

        match.data.bestMatches.map(item => {
          setRec([...rec, { ticker: item["1. symbol"], id: item["2. name"] }]);
          console.log(rec);
        });
      });
  }, [ticker]);
  return (
    <div>
      <p>portfolio</p>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={handleClick}>
            Get Stocks
          </Button>
        </InputGroup.Prepend>
      </InputGroup>

      <Form.Group>
        <FormControl
          aria-describedby="basic-addon1"
          onChange={e => {
            setTicker(e.target.value);
          }}
        />
      </Form.Group>

      <ul>
        {stocks.map(item => (
          <li key={item.timestamp}>
            symbol:{item.symbol} Price:{item.symbol}{" "}
          </li>
        ))}
      </ul>
      <ul>
        {rec.map(thing => (
          <li key={thing.id}>symbol:{thing.ticker}</li>
        ))}
      </ul>
    </div>
  );
}
export default Portfolio;
