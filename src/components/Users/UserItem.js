import React from "react";
import PropTypes from "prop-types";
const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        className="round-img"
        alt={login}
        src={avatar_url}
        style={{ width: "60px" }}
      />

      <h3>{login}</h3>
      <a
        href={html_url}
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-dark btn-sm my-1"
      >
        More
      </a>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
