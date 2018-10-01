import React, { Component } from 'react';
import Home from 'presentational/home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ['Leonardo', 'Kalyn', 'Lyan', 'Nylk']
    };
  }

  render() {
    const { users } = this.state;

    return <Home users={users} />
  }
}

export default HomeContainer;