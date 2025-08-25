import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getApidata = async () => {
    const datayega = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await datayega.json();
    console.log(response);
    setData(response);
  };
  useEffect(() => {
    getApidata();
  }, []);

  return (
    <>
      {data.map(({ id, title }) => {
        return (
          <div key={id}>
            <h1> id: {id}</h1>
            <h4> title: {title}</h4>
          </div>
        );
      })}
    </>
  );
};

export default App;
