// src/components/Positions.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/allPositions`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
        setError("Failed to load positions");
      });
  }, []);

  return (
    <div>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((pos, index) => {
              const curValue = pos.price * pos.qty;
              const pnl = curValue - pos.avg * pos.qty;
              const pnlClass = pnl >= 0 ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{pos.product}</td>
                  <td>{pos.name}</td>
                  <td>{pos.qty}</td>
                  <td>{pos.avg.toFixed(2)}</td>
                  <td>{pos.price.toFixed(2)}</td>
                  <td className={pnlClass}>{pnl.toFixed(2)}</td>
                  <td className={pos.isLoss ? "loss" : "profit"}>{pos.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
