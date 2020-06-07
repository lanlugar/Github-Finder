import React, { Component } from "react";
import UserItem from "./UserItem";
import Proptypes from "prop-types";

const Users = (props) => {
  const { users, loading } = props;
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

Users.defaultProps = {
  users: [],
};

export default Users;
