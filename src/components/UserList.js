import React from "react";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles.userList}>
      {props.users.map((user) => (
        <User username={user.name} userAge={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
