import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    console.log("Dashboard Home loaded. Checking URL for token...");
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl) {
      console.log("Token found in URL! Saving to localStorage...");
      localStorage.setItem("token", tokenFromUrl);
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found! Redirecting back to login...");
      window.location.href = `${process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000"}/login`;
    } else {
      console.log("Token verified. Loading Dashboard...");
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
