import React, { Component } from 'react';
import API from 'api/shawApiAccess';
import Home from 'presentational/home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    API.getUsers().then((users) => {
      this.setState({
        users: users.map(user => user.login),
      });
    });
  }

  render() {
    const { users } = this.state;

    return <Home users={users} />;
  }
}

export default HomeContainer;
