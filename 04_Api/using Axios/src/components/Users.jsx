import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const getApidata = async () => {
    // console.log(data);

    const fetchApi = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const response = fetchApi;
    setData(response.data);
  };
  useEffect(() => {
    getApidata();
  }, []);

  return (
    <>
      {data.map((dt) => {
        return (
          <div key={dt.id}>
            <h1>Name: {dt.name}</h1>
            <h3>Email: {dt.email}</h3>
            <p>Id: {dt.id}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Users;
