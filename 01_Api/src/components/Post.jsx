import { useState, useEffect } from "react";

const Post = () => {
  let [data, setData] = useState([]);

  let apiFetch = async () => {
    const datacoming = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const holdkre = await datacoming.json();
    setData(holdkre);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <>
      {data.map(({ id, title, body }) => {
        return (
          <div key={id}>
            <h3> Id: {id}</h3>
            <h4> Title: {title}</h4>
            <h2> Body : {body}</h2>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default Post;
