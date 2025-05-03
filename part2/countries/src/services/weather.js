import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY;
const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=`;

const getTem = ({ capital }) => {
  const request = axios.get(baseUrl + capital + "&aqi=no");
  return request.then((response) => response.data);
};

export default {
  getTem,
};
