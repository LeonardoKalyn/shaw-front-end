import axios from 'axios';

const baseUrl = process.env.API || 'https://lk-shaw-server.herokuapp.com/api';

const getUsers = () => axios.get(`${baseUrl}/users`)
  .then(response => response.data)
  .catch(() => []);

const getUser = userName => axios.get(`${baseUrl}/users/${userName}/details`)
  .then(response => JSON.parse(response.data))
  .catch(error => error);

const getRepos = userName => axios.get(`${baseUrl}/users/${userName}/repos`)
  .then(response => JSON.parse(response.data))
  .catch(error => error);

export default {
  getUsers,
  getUser,
  getRepos,
};