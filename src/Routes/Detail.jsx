import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCoinDetailById } from "../api";

const Detail = () => {
  const { id } = useParams();
  const { isLoading, data, isError } = useQuery(["getCoinDetailById", id], () =>
    getCoinDetailById(id)
  );
  return (
    <div>
      {data && (
        <div>
          <img src={data?.logo} alt="logo-img" />
          <h1>{data?.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Detail;
