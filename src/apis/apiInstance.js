import axios from "axios";
import { getUser } from "../utils";

const APP_BASE_URL =
  "https://64dcc997bbd78b05d8f64417--intelliplagiarismai-backend.netlify.app/api/";

const user = getUser();

const instance = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${user?.token}`,
    "Content-Type": "application/json",
  },
});

export default instance;
