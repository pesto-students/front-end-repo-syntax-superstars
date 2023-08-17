import axios from "axios";
import { getUser } from "../utils";

const APP_BASE_URL = "https://intelliplagiarism-backend.onrender.com/api/";

const user = getUser();

const instance = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${user?.token}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:8888/",
    "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
  },
});

export default instance;
