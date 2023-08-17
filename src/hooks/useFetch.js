import { useState } from "react";
import instance from "../apis/apiInstance";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiCall = async (url, configObject) => {
    try {
      setLoading(true);
      const res = await instance(url, configObject);
      console.log(res);
      if (res && res?.data) {
        setLoading(false);
        return res;
      } else {
        setLoading(false);
        setError(res?.data?.message || res?.data);
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        setError(error?.response?.data);
      }
      console.log(error);
    }
  };

  return { loading, error, apiCall };
};

export default useFetch;
