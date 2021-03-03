import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { getAllUsers } from "../../services/userService";

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }

  render() {
    return (
      <>
        <h1>Hello. This is a list of all the users.</h1>
        {this.state.users.map((user) => (
          <div>
            <p>{user.name} </p>
            <Link
              to={{
                pathname: "/profile",
                state: { user }
              }}
            >
              {user.name}
            </Link>
          </div>
        ))}
      </>
    );
  }
}

export default Users;