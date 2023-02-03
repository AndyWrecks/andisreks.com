require("dotenv").config();
const axios = require("axios");

const apiKey = process.env.OMDb_API_KEY;

const getOmdbTitleById = async function (imdbId) {
  return axios
    .get(`https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}&`)
    .then((response) => {
      return response;
    });
};
const getOmdbTitleByName = async function (name) {
  return axios
    .get(`https://www.omdbapi.com/?t=${name}&apikey=${apiKey}&`)
    .then((response) => {
      return response.data;
    });
};

module.exports = { getOmdbTitleById, getOmdbTitleByName };
