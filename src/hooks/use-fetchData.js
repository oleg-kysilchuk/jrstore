import { useState, useEffect } from "react";

const useFetchData = (apiUrl) => {
  const [state, setState] = useState({
    status: "loading",
    data: null,
    error: null,
  });

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if(response.ok) {
        setState((prevState) => {
          return {
            ...prevState,
            status: "complete",
            data: data,
          };
        });
      }
    } catch (error) {
      setState((prevState) => {
        return {
          ...prevState,
          status: "error",
          data: null,
          error: 'Виникла помилка! Спробуйте перезавантажити сторінку',
        };
      });
    }
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl]);

  return state;
};

export default useFetchData;
