import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from 'api/shawApiAccess';
import User from 'presentational/user';

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentWillMount() {
    const { match } = this.props;
    API.getUser(match.params.username)
      .then(user => this.setState({user}));
  }

  render() {
    const { user } = this.state;

    return <User user={user} />;
  }
}

UserContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default UserContainer;
