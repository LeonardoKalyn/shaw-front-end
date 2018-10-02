import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ users }) => {
  const linkToUser = user => <Link to={`/users/${user}`}>{user}</Link>;

  return users.map(user => (
    <li key={user}>{linkToUser(user)}</li>
  ));
};

export default Home;
