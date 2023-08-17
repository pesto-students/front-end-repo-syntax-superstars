import axios from "axios";
import { getUser } from "../utils";

const APP_BASE_URL = "http://localhost:2000/api/";

const user = getUser();

const instance = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${user?.token}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
  },
});

export default instance;
