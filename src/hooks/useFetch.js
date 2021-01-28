import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(URL, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        setError(null);
        console.log("data", data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          // auto catches network / connection error
          setLoading(false);
          setError(err.message);
          console.log("error", err);
        }
      });

    // abort the fetch
    return () => abortCont.abort();
  }, [URL]);

  return { data, loading, error };
};

export default useFetch;
