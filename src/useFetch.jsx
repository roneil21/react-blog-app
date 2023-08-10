import { useState, useEffect } from "react";

const useFetch = (url) => {                          //custom Hook Component
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetch Data Failed");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 400); // wait 1s to fetch data. Just to simulating on fetching data on real world which takes time
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
