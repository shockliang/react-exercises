import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h1>My works</h1>
    <p>Checkout the stuff I've done:</p>
    <Link to="/portfolio/1">Item one</Link>
    <Link to="/portfolio/2">Item two</Link>
    <Link to="/portfolio/3">Item three</Link>
    <Link to="/portfolio/4">Item four</Link>
    <Link to="/portfolio/5">Item five</Link>
  </div>
);

export default PortfolioPage;
