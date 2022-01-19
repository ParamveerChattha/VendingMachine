import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";
import _ from "lodash";
import { CalculatePrice } from "../utils/CalculatePrice";

export const DisplayGrid = (balance, setBalance) => {
  const [itemLocation, setItemLocation] = useState("");

  let gridValue = "";

  function chooseColumn(e) {
    setItemLocation("");
    gridValue = e.target.value;
  }

  function chooseRow(e) {
    if (_.isEmpty(gridValue)) {
      alert("Choose the column please!");
    }
    if (gridValue.length === 1) {
      const item = gridValue.concat(e.target.value);
      setItemLocation(item);
    }
  }

  function dispenceItem() {
    if (itemLocation.length === 2) {
      const itemValType = itemLocation.slice(0, 1);
      console.log("itemValType", itemValType);
      setItemLocation("");
      const cost = CalculatePrice(itemValType);
      if (balance.balance >= cost) {
        const newBalance = balance.balance - cost;
        balance.setBalance(newBalance);
        alert(`item dispensed. Balance: $${newBalance}`);
      } else {
        console.log("item cost: ", cost, " and balance: ", balance.balance);
        alert("Insufficient Balance");
      }
    } else {
      alert("choose correct item");
    }
  }

  return (
    <>
      <div className={"choose-product"}>
        <h2>Choose the item code </h2>
        <Button
          variant="primary"
          value="A"
          onClick={(e) => {
            chooseColumn(e);
          }}
        >
          A
        </Button>
        <Button
          variant="primary"
          value="B"
          onClick={(e) => {
            chooseColumn(e);
          }}
        >
          B
        </Button>
        <Button
          variant="primary"
          value="C"
          onClick={(e) => {
            chooseColumn(e);
          }}
        >
          C
        </Button>
        <br />
        <br />
        <div>
          <Button
            variant="outline-primary"
            value="1"
            onClick={(e) => {
              chooseRow(e);
            }}
          >
            1
          </Button>
          <Button
            variant="outline-primary"
            value="2"
            onClick={(e) => {
              chooseRow(e);
            }}
          >
            2
          </Button>
          <Button
            variant="outline-primary"
            value="3"
            onClick={(e) => {
              chooseRow(e);
            }}
          >
            3
          </Button>
          <Button
            variant="outline-primary"
            value="4"
            onClick={(e) => {
              chooseRow(e);
            }}
          >
            4
          </Button>
          <Button
            variant="outline-primary"
            value="5"
            onClick={(e) => {
              chooseRow(e);
            }}
          >
            5
          </Button>
        </div>
        <br />
        {itemLocation.length === 2 && (
          <h2> you have chosen: {itemLocation} </h2>
        )}
        <Button variant="danger" onClick={() => setItemLocation("")}>
          Reset
        </Button>
        <Button variant="success" onClick={() => dispenceItem()}>
          Confirm
        </Button>
        <br />
        <Button
          variant="warning"
          onClick={() => {
            alert(
              `balance returned: ${
                Math.round((balance.balance + Number.EPSILON) * 100) / 100
              }`
            );
            balance.setBalance(0);
          }}
        >
          withdraw balance
        </Button>
      </div>
    </>
  );
};
