require("dotenv").config();
const axios = require("axios");

const space = async function () {
  axios
    .get(
      `https://www.omdbapi.com/?i=tt9764362&apikey=${process.env.OMDb_API_KEY}&`
    )
    .then((response) => {
      console.log(response);

      return console.log();
    });
};

module.exports = space();
