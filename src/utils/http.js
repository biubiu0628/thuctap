import axios from "axios";

const http = axios.create({
  baseURL: "https://api.mysupership.vn",
  header: {
    "Content-Type": "application/json",
  },
});

export default http;
