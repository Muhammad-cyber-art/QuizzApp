import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error,setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
     try{ setIsPending(true);
      const req = await fetch(url);
      const data = await req.json();
      setData(data);
      setIsPending(false)
    }catch (err){
        console.log(err);
        setError(err);
    }
    };
    fetchData();
  }, [url]);

  return {data,isPending,error};
}

export { useFetch };
