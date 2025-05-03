import React, { useState, useEffect } from "react";
import Insights from "../components/Insights";

const Home = ({transactions}) => {
  return (
    <div className="text-center mt-4">
      <h2 className="text-xl font-semibold mb-4">Welcome to FinTrackr</h2>
      <p className="mb-4">Track your income and expenses easily!</p>
      <Insights transactions={transactions}/>
    </div>
  );
};

export default Home;
