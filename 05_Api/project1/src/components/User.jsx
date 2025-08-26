import { useState } from "react";
import { users } from "../utils/data";
const User = () => {
  const [userdata, setUserData] = useState(users);
  //   console.log(userdata);

  return (
    <div>
      {users.map((dt) => {
        return (
          <>
            <h3> {dt.split(",")[0]}</h3>
            {/* <h4>{dt.split(",")[1]}</h4> */}
          </>
        );
      })}
    </div>
  );
};

export default User;
