import React from 'react';

const Home = ({users}) => {
  return users.map(user => (
    <li>{user}</li>
  ));
};

export default Home;