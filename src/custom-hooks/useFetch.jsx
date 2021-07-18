import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState();
  const source = axios.CancelToken.source();
 
  useEffect(() => {
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));

    return () => source.cancel();
  }, []);

  return data;
}

export default useFetch;
