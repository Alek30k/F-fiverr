import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-nlt2.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
