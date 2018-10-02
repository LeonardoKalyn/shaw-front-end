import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => (
  <table>
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
          <td><a href={repo.html_url}>{repo.html_url}</a></td>
        </tr>
      ))}
    </tbody>
  </table>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
