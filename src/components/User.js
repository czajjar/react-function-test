import React from "react";

const User = (props) => {
  // const [userAge, setUserAge] = useState(23);
  // const [username, setUsername] = useState("Max");

  return <div>{`${props.username} (${props.userAge} years old)`}</div>;
};

export default User;
