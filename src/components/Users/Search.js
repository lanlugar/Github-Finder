import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  state = {
    text: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      showClear: PropTypes.bool.isRequired,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Search field cannot be empty", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} action="" className="form">
          <input
            type="text"
            name="text"
            placeholder="Search User..."
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Search;
