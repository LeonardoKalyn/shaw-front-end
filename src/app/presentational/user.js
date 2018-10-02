import React from 'react';
import PropTypes from 'prop-types';
import Repos from 'presentational/repos';
import { Panel } from 'react-bootstrap';

const User = ({ user, repos }) => (
  <div>
    <Panel>
      <h3>Id</h3>
      <li>{ user.id }</li>

      <h3>Login</h3>
      <li>{ user.login }</li>

      <h3>Profile</h3>
      <li><a href={user.html_url}>{user.html_url}</a></li>

      <h3>Creation Date</h3>
      <li>{ user.created_at }</li>
    </Panel>
    <Panel>
      <Repos repos={repos} />
    </Panel>
  </div>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;
