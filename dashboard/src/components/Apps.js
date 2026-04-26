import React from "react";
import "./Apps.css";

const Apps = () => {
  const appList = [
    {
      name: "Console",
      description: "Reporting and backoffice platform for your investments.",
      icon: "https://img.icons8.com/color/48/dashboard.png",
    },
    {
      name: "Kite",
      description: "Our flagship trading platform with streaming market data.",
      icon: "https://img.icons8.com/color/48/kite.png",
    },
    {
      name: "Coin",
      description: "Buy direct mutual funds online with zero commission.",
      icon: "https://img.icons8.com/color/48/coins.png",
    },
    {
      name: "Varsity",
      description: "Learn stock market trading and investing from scratch.",
      icon: "https://img.icons8.com/color/48/graduation-cap.png",
    },
    {
      name: "Sentinel",
      description: "Create powerful market alerts on the cloud.",
      icon: "https://img.icons8.com/color/48/shield.png",
    },
    {
      name: "Tijori",
      description: "Advanced fundamental analysis tool for investors.",
      icon: "https://img.icons8.com/color/48/safe.png",
    }
  ];

  return (
    <div className="apps-page">
      <h3 className="title">Trading Ecosystem</h3>
      <div className="apps-grid">
        {appList.map((app, index) => (
          <div key={index} className="app-card">
            <div className="app-header">
              <img src={app.icon} alt={app.name} className="app-icon" />
              <h4>{app.name}</h4>
            </div>
            <p>{app.description}</p>
            <button className="btn btn-blue">Launch</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
