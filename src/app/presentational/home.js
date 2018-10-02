import React from 'react';

const Home = ({ users }) => {
  console.log(users);
  return users.map(user => (
    <li>{ user }</li>
  ));
};

export default Home;
