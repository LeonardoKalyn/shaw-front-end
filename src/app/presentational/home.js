import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Pager } from 'react-bootstrap';

const Home = ({ users, getNextUsers }) => {
  const linkToUser = user => <Link to={`/users/${user}`}><ListGroupItem>{user}</ListGroupItem></Link>;

  return (
    <Pager>
      <Pager.Item previous onClick={() => getNextUsers(false)}>
        &larr; Previous
      </Pager.Item>
      <Pager.Item next onClick={() => getNextUsers(true)}>
        Next &rarr;
      </Pager.Item>
      <ListGroup>
        {users.length > 0
          ? users.map(user => linkToUser(user))
          : <ListGroupItem>Bad server! Bad!</ListGroupItem>
        }
      </ListGroup>
      <Pager.Item previous onClick={() => getNextUsers(false)}>
        &larr; Previous
      </Pager.Item>
      <Pager.Item next onClick={() => getNextUsers(true)}>
        Next &rarr;
      </Pager.Item>
    </Pager>
  );
};

Home.propTypes = {
  users: PropTypes.array.isRequired,
  getNextUsers: PropTypes.func.isRequired,
};
export default Home;
