import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  return (
    <Link to={`/${coin.id}`}>
      <div className="coinBtn">{coin.symbol}</div>
    </Link>
  );
};

export default Coin;
