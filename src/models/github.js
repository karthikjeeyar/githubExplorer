const axios = require("axios");
const config = require('dotenv').config()
const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

const getUserInfo = user => axios.get(`https://api.github.com/users/${user}?client_id=${clientId}&client_secret=${clientSecret}`)
    .then(res => res.data);

const getUsersList = user => axios.get(`https://api.github.com/search/users?q=${user}`)
    .then(res => res.data);

const getUserRepos = user => axios.get(`https://api.github.com/users/${user}/repos?client_id = ${this.clientId}&client_secret=${clientSecret}`)
    .then(res => res.data);

module.exports = {
    getUserInfo,
    getUserRepos,
    getUsersList
};
