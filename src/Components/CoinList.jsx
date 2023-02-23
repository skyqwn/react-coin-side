import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCoins } from "../api";
import Coin from "./Coin";
import Fail from "./Fail";
import Loader from "./Loader";

const CoinList = () => {
  const { data, isLoading, isError } = useQuery("getCoins", getCoins);

  const coins = data?.slice(0, 300);

  if (isError) return <Fail />;

  return (
    <div className="w-fit">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {coins.map((coin) => (
            <div key={coin.id}>
              <Coin coin={coin} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CoinList;
