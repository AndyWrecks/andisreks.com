const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;
const scaper = async function () {
  console.log("working");
  axios.get("https://www.rottentomatoes.com/m/the_menu").then((response) => {
    const dom = new JSDOM(response);

    console.log("hello");

    return console.log(
      dom.window.document.getElementsByClassName("scoreboard__title").innerHTML
    );
  });
};

module.exports = scaper();
