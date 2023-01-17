require("dotenv").config();
const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;
const scaper = async function () {
  axios
    .get(
      `http://www.omdbapi.com/?i=tt9764362&apikey=${process.env.OMDb_API_KEY}&`
    )
    .then((response) => {
      const dom = new JSDOM(response);

      console.log(response);

      return console.log(
        dom.window.document.getElementsByClassName("scoreboard__title")
          .innerHTML
      );
    });
};

module.exports = scaper();
