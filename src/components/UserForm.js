import React, { useState } from "react";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const [user, setUser] = useState({});
  const [isValid, setIsValid] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const userNameChangeHandler = () => {};

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles["form-control"]}>
        <label>Username</label>
        <input type="text">{user.name}</input>
      </div>
      <div className={styles["form-control"]}>
        <label>User Age (years)</label>
        <input type="number">{user.age}</input>
      </div>
    </form>
  );
};

export default UserForm;
