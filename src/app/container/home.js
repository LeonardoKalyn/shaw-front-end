import React, { Component } from 'react';
import API from 'api/shawApiAccess';
import Home from 'presentational/home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      last: 30,
      first: 0,
    };

    this.getNextUsers = this.getNextUsers.bind(this);
  }

  componentWillMount() {
    this.getNextUsers();
  }

  getNextUsers(next) {
    const { last, first } = this.state;
    API.getUsers(next ? last : first).then((newUsers) => {
      this.setState({
        users: newUsers.map(user => user.login),
        last: newUsers[newUsers.length - 1].id - 1 || 0,
        first: first - 30 > 0 ? first - 30 : 0,
      });
    });
  }

  render() {
    const { users } = this.state;

    return <Home users={users} getNextUsers={this.getNextUsers} />;
  }
}

export default HomeContainer;
