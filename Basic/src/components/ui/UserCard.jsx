import { useState } from "react";
import { data } from "../../utils/data";

const UserCard = () => {
  const [userdata, setUserData] = useState(data);
  console.log(userdata);

  return (
    <>
      {userdata.map(
        ({
          client,
          country,
          date,
          email,
          image,
          progress,
          project,
          status,
        }) => {
          return (
            <div
              key={client}
              style={{
                width: "700px",
                height: "600px",
                backgroundColor: "lightblue",
              }}
            >
              <h1>Name : {client}</h1>
              <h2>Country : {country}</h2>
              <h2>Date : {date}</h2>
              <h2>Email : {email}</h2>
              <img
                src={image}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
              <h2>Progress : {progress}</h2>
              <h2>Project : {project}</h2>
              <h2>Status : {status}</h2>
            </div>
          );
        }
      )}
    </>
  );
};

export default UserCard;
