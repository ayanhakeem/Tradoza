import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // Fetch Holdings
    axios
      .get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/allHoldings`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Summary fetch error (Holdings):", err);
        setError("Error loading holdings");
      });

    // Fetch Balance
    axios
      .get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/auth/profile`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.data.success) {
          setBalance(res.data.user.balance);
        }
      })
      .catch((err) => {
        console.error("Summary fetch error (Balance):", err);
      });
  }, []);

  // Calculate totals
  let totalInvestment = 0;
  let totalCurrentValue = 0;
  allHoldings.forEach((stock) => {
    totalInvestment += (stock.avg || 0) * (stock.qty || 0);
    totalCurrentValue += (stock.price || 0) * (stock.qty || 0);
  });
  let totalPnL = totalCurrentValue - totalInvestment;
  let pnlPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
        <div style={{ margin: "10px 0" }}>
          <button 
            className="btn btn-blue" 
            style={{ padding: "5px 10px", fontSize: "12px" }}
            onClick={async () => {
              const token = localStorage.getItem("token");
              try {
                await axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/addHoldings`, { headers: { Authorization: token } });
                await axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/addPositions`, { headers: { Authorization: token } });
                window.location.reload();
              } catch (e) {
                alert("Error seeding data");
              }
            }}
          >
            Seed Sample Data
          </button>
        </div>
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>{balance.toLocaleString()}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totalPnL >= 0 ? "profit" : "loss"}>
              {totalPnL.toLocaleString()} <small>{totalPnL >= 0 ? "+" : ""}{pnlPercent.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{totalCurrentValue.toLocaleString()}</span>{" "}
            </p>
            <p>
              Investment <span>{totalInvestment.toLocaleString()}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;

