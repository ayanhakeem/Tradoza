import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // ✅ access context values
  const { closeBuyWindow, closeSellWindow } = useContext(GeneralContext);


  const handleBuyClick = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: mode,
        },
        {
          headers: { Authorization: token },
        }
      );

      if (mode === "BUY") {
        closeBuyWindow();
      } else {
        closeSellWindow();
      }
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  const handleCancelClick = () => {
    if (mode === "BUY") {
      closeBuyWindow();
    } else {
      closeSellWindow();
    }
  };


  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className={mode === "BUY" ? "btn btn-blue" : "btn btn-orange"}
            onClick={handleBuyClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
