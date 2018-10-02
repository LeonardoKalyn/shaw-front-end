import axios from 'axios';

const baseUrl = process.env.API || 'https://lk-shaw-server.herokuapp.com/api';

const getUsers = (since = 0) => axios.get(`${baseUrl}/users?since=${since}`)
  .then(response => response.data)
  .catch(() => []);

const getUser = userName => axios.get(`${baseUrl}/users/${userName}/details`)
  .then(response => response.data)
  .catch(error => error);

const getRepos = userName => axios.get(`${baseUrl}/users/${userName}/repos`)
  .then(response => response.data)
  .catch(error => error);

export default {
  getUsers,
  getUser,
  getRepos,
};
