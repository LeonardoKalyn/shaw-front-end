import React from 'react';

const User = ({ user }) => (
  <div>
    <h3>Id</h3>
    <li>{ user.id }</li>

    <h3>Login</h3>
    <li>{ user.login }</li>

    <h3>Profile</h3>
    <li><a href={user.html_url}>{user.html_url}</a></li>

    <h3>Creation Date</h3>
    <li>{ user.created_at }</li>
  </div>
);

export default User;
