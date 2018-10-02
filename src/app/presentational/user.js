import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Repos from 'presentational/repos';
import { Panel, Label } from 'react-bootstrap';

const User = ({ user, repos }) => (
  <div>
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h2">{user.login}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <h3>
          <Label bsStyle="primary">Id</Label>
        </h3>
        <h3>
          { user.id }
        </h3>
        <h3>
          <Label bsStyle="primary">a.k.a.</Label>
        </h3>
        <h3>
          { user.name }
        </h3>
        <h3>
          <Label bsStyle="primary">Profile</Label>
        </h3>
        <h3>
          <a href={user.html_url}>{user.html_url}</a>
        </h3>
        <h3>
          <Label bsStyle="primary">On GH Since</Label>
        </h3>
        <h3>
          {user.created_at }
        </h3>
      </Panel.Body>
    </Panel>
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title componentClass="h2">Repos</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Repos repos={repos} />
      </Panel.Body>
    </Panel>
  </div>
);

User.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array.isRequired,
};

User.defaultProps = {
  user: {
    id: '?',
    name: 'Hey server, what was that name again?',
    html_url: 'github.com',
    created_at: 'Someday in the past... I think',
  },
};

export default withRouter(User);
