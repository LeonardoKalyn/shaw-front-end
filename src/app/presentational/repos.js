import React from 'react';
import PropTypes from 'prop-types';
import { Table, Glyphicon } from 'react-bootstrap';

const Repos = ({ repos }) => (
  <Table striped condensed hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      {repos.map(repo => (
        <tr key={repo.id}>
          <td>{repo.id}</td>
          <td>{repo.name}</td>
          <td><a href={repo.html_url}><Glyphicon glyph="share-alt" /></a></td>
        </tr>
      ))}
    </tbody>
  </Table>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
