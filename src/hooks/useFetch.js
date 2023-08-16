import { useState } from "react";
import instance from "../apis/apiInstance";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiCall = async (url, configObject) => {
    setLoading(true);
    const res = await instance(url, configObject);
    if (res && res?.data) {
      setLoading(false);
      return res;
    } else {
      setLoading(false);
      setError(res?.data?.message || res?.data);
    }
  };

  return { loading, error, apiCall };
};

export default useFetch;
