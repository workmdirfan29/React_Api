import { useState } from "react";
import { useEffect } from "react";

const Todo = () => {
  const [data, setData] = useState([]);
  const getApi = async () => {
    const aarhaData = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const response = await aarhaData.json();
    // console.log(response);
    setData(response);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {data.map((dt) => {
        return (
          <div key={dt.id}>
            <h4>ID : {dt.id}</h4>
            <h3>URL : {dt.url}</h3>
            <h4>Title : {dt.title}</h4>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default Todo;
