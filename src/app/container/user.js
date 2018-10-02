import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from 'api/shawApiAccess';
import User from 'presentational/user';

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: [],
    };
  }

  componentWillMount() {
    const { match } = this.props;
    const { username } = match.params;
    API.getUser(username)
      .then(user => this.setState({ user }));
    API.getRepos(username)
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { user, repos } = this.state;

    return <User user={user} repos={repos} />;
  }
}

UserContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default UserContainer;
