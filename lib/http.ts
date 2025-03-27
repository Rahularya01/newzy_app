import axios from "axios";

const http = axios.create({
  baseURL: "https://newzy.ca/api",
});

export { http };
