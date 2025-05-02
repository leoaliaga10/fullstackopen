import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/name/";
const allUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getOne = ({ countries }) => {
  const request = axios.get(baseUrl + countries);
  return request.then((response) => response.data);
};

const getAll = () => {
  const request = axios.get(allUrl);
  return request.then((response) => response.data);
};

export default {
  getOne,
  getAll,
};
