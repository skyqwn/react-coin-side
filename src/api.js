import axios from "axios";

const coinAxios = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
});

export const getCoins = async () => {
  try {
    // const res = await axios.get("https://shazam.p.rapidapi.com/charts/list");
    const res = await coinAxios.get("coins");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoinDetailById = async (id) => {
  try {
    const res = await coinAxios.get(`/coins/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
