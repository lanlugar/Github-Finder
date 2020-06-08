import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import Search from "./components/Users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&cllient_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUsers(text) {
    console.log(text);
  }
  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
