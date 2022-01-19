import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";
import { DisplayGrid } from "./DisplayGrid";
import styled from "./products-on-display.modules.scss";

export const Machine = () => {
  const [balance, setBalance] = useState(0.0);
  const [currenyType, setCurrencyType] = useState("Coin Type");
  const [currenyCount, setCurrencyCount] = useState(0);
  const [currencyAddition, setCurrencyAddition] = useState(false);

  function addCurrency() {
    let amount = 0;
    console.log("currenyType:", currenyType, " currencyCount: ", currenyCount);
    switch (currenyType) {
      case "nickel": // 5 cents
        amount = (currenyCount * 5) / 100;
        setBalance(balance + amount);
        break;
      case "dime": //10 cents
        amount = (currenyCount * 10) / 100;
        setBalance(balance + amount);
        break;
      case "quarter": //25 cents
        amount = (currenyCount * 25) / 100;
        setBalance(balance + amount);
    }
    setCurrencyType("Coin Type");
    setCurrencyCount(0);
    console.group("balance at addCurrency", balance);
  }

  return (
    <div
      className="container"
      style={{
        marginLeft: "5%",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginLeft: "-10%" }}>
        Total Balance: ${Math.round((balance + Number.EPSILON) * 100) / 100}
      </h2>
      <h3 style={{ textAlign: "left" }}>
        {!currencyAddition && (
          <>
            <Button
              variant="outline-success"
              onClick={(e) => {
                e.preventDefault();
                setCurrencyAddition(true);
              }}
            >
              ADD CURRENCY
            </Button>
          </>
        )}
      </h3>
      {currencyAddition && (
        <div
          className="add-currency"
          style={{ display: "flex", marginTop: "15%" }}
        >
          <Form.Control
            style={{ width: "20%", marginRight: "3%", marginLeft: "10%" }}
            value={currenyCount}
            type="number"
            onChange={(e) => {
              setCurrencyCount(parseInt(e.target.value));
            }}
          />
          <Dropdown
            onSelect={(e) => {
              setCurrencyType(e.substring(2));
            }}
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {currenyType}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/quarter">Quarter</Dropdown.Item>
              <Dropdown.Item href="#/dime">Dime</Dropdown.Item>
              <Dropdown.Item href="#/nickel">Nickel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button
            style={{ marginLeft: "1%" }}
            type="submit"
            onClick={() => {
              addCurrency();
            }}
          >
            Add
          </Button>
        </div>
      )}
      <DisplayGrid balance={balance} setBalance={setBalance} />
    </div>
  );
};
