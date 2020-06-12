import React, { useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ sshowClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("Search field cannot be empty", "light");
    } else {
      console.log(text);
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} action="" className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
