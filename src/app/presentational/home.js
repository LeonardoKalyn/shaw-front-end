import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Home = ({ users }) => {
  const linkToUser = user => <Link to={`/users/${user}`}><ListGroupItem>{user}</ListGroupItem></Link>;

  return (
    <ListGroup>
      {users.map(user => linkToUser(user))}
    </ListGroup>
  );
};

Home.propTypes = {
  users: PropTypes.array.isRequired,
};
export default Home;
