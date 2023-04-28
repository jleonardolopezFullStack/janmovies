import { useEffect, useState } from "react";
const url = process.env.URL;
export const useFetcher = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return { data };
};

/* export const handleSubmitCategory = (url) => {
  const [item, setItem] = useState({ null: null });

  return { item };
}; */
