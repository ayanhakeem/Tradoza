import React, { useState, useEffect } from "react";
import axios from "axios";

const Funds = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/auth/profile`, {
        headers: { Authorization: token },
      });
      if (res.data.success) {
        setBalance(res.data.user.balance);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching balance:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const handleAddFunds = async () => {
    const amount = window.prompt("Enter amount to add:");
    if (!amount || isNaN(amount)) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL || "http://localhost:3002"}/auth/add-funds`,
        { amount: Number(amount) },
        { headers: { Authorization: token } }
      );
      if (res.data.success) {
        setBalance(res.data.balance);
        alert(`₹${amount} added successfully!`);
      }
    } catch (err) {
      alert("Error adding funds");
    }
  };

  const handleWithdraw = async () => {
    const amount = window.prompt("Enter amount to withdraw:");
    if (!amount || isNaN(amount)) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL || "http://localhost:3002"}/auth/withdraw-funds`,
        { amount: Number(amount) },
        { headers: { Authorization: token } }
      );
      if (res.data.success) {
        setBalance(res.data.balance);
        alert(`₹${amount} withdrawn successfully!`);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error withdrawing funds");
    }
  };

  const handleOpenAccount = () => {
    const confirm = window.confirm("Would you like to open a Commodity account?");
    if (confirm) {
      alert("Application submitted! Your commodity account will be active within 24 hours.");
    }
  };

  if (loading) return <div className="funds-loading">Loading account balance...</div>;

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button className="btn btn-green" onClick={handleAddFunds}>Add funds</button>
        <button className="btn btn-blue" onClick={handleWithdraw}>Withdraw</button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{balance.toLocaleString()}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <button className="btn btn-blue" onClick={handleOpenAccount}>Open Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
