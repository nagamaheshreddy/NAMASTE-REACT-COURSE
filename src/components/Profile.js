import { useState } from "react";

const Profile = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is my Profile Function component page</h1>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Profile;
