import React, { useEffect, useState } from "react";

function APi() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // fetch("https://dummyjson.com/quotes")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.quotes.slice(0, 10)));

    const fetchData = async () => {
      let apidata = await fetch("https://dummyjson.com/quotes");
      let result = await apidata.json();
      setData(result.quotes.slice(0, 10));
    };
    fetchData();
  }, []);
  return (
    <div>
      {data
        ? data.map((quote) => (
            <p key={quote.id}>
              <h4>
                {quote.id}:{quote.quote}
              </h4>
            </p>
          ))
        : "Loading"}
    </div>
  );
}

export default APi;
