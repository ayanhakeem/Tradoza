import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { VerticalGraph } from "./VerticalGraph";
import "./BuyActionWindow.css"; // Reuse existing modal styles

const AnalyticsWindow = () => {
  const { isAnalyticsOpen, closeAnalytics, selectedStockUID } = useContext(GeneralContext);

  if (!isAnalyticsOpen) return null;

  // Mock data for the specific stock analytics
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: `${selectedStockUID} Performance`,
        data: [120, 190, 300, 500, 200, 300],
        backgroundColor: "rgba(65, 132, 243, 0.5)",
      },
    ],
  };

  return (
    <div className="modal-container" style={{ position: "fixed", top: "20%", left: "35%", width: "400px", background: "white", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.5)", zIndex: 100 }}>
      <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h3>Analytics: {selectedStockUID}</h3>
        <button onClick={closeAnalytics} style={{ cursor: "pointer" }}>X</button>
      </div>
      <VerticalGraph data={data} />
      <div style={{ marginTop: "20px" }}>
        <p>Current Trend: <strong>Bullish</strong></p>
        <p>Market Sentiment: <strong>Strong Buy</strong></p>
      </div>
    </div>
  );
};

export default AnalyticsWindow;
