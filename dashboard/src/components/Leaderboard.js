import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:3002/leaderboard");
        setLeaders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching leaderboard", err);
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) return <div className="loader">Loading Top Traders...</div>;

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2 className="title">🏆 Top Traders of the Week</h2>
        <p className="subtitle">Rankings based on P&L percentage growth</p>
      </div>

      <div className="leaderboard-table">
        <div className="table-header">
          <span>Rank</span>
          <span>Trader</span>
          <span>Trades</span>
          <span>Balance</span>
          <span>P&L %</span>
        </div>
        
        {leaders.map((leader, index) => (
          <div key={index} className={`leader-row ${index < 3 ? 'top-three' : ''}`}>
            <span className="rank">{index + 1}</span>
            <span className="name">{leader.name}</span>
            <span className="trades">{leader.totalTrades}</span>
            <span className="balance">₹{leader.balance.toLocaleString()}</span>
            <span className="pnl-percent">+{leader.pnlPercent}%</span>
          </div>
        ))}
      </div>

      <div className="info-card">
          <h4>Why join the leaderboard?</h4>
          <p>Successful traders with high P&L percentages gain visibility in the community and can be followed by others for strategy insights.</p>
      </div>
    </div>
  );
};

export default Leaderboard;
