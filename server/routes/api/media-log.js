const express = require("express");
const mongodb = require("mongodb");
const axios = require("axios");
const fetch = require("node-fetch");

const router = express.Router();
const mediaLogBoardId = "Hb7nAFL1";

const trelloBaseUrl = `https://api.trello.com/1`;
const trelloBoardUrl = `${trelloBaseUrl}/boards/${mediaLogBoardId}`;
const trelloAuth = `?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`;
const trelloConfig = {
  method: "GET",
  headers: { Accept: "application/json" },
};

// Get
router.get("/", async (req, res) => {
  const lists = await loadMediaLists();
  const items = await loadMediaCards();

  res.send({
    lists: await lists.find({}).toArray(),
    items: await items.find({}).toArray(),
  });
});

// Update
router.get("/trello-fetch", async (req, res) => {
  const listCollection = await loadMediaLists();
  const cardCollections = await loadMediaCards();
  const lists = await axios
    .get(`${trelloBoardUrl}/lists${trelloAuth}`, { ...trelloConfig })
    .then((response) => {
      return response.data;
    });

  await lists.forEach((list) => {
    listCollection.updateOne(
      { id: list.id },
      { $set: list },
      { upsert: true },
      (err, doc) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });

  let cards = await Promise.all(
    lists.map((list) => {
      switch (list.id) {
        case "61e899b24e446117eccefdfe" ||
          "61f823d0a8608d8cdb061729" ||
          "61e899b65407401ebac210e6":
          list.category = "tv";
          break;
        case "61e8ae011c9fa274b951a554" ||
          "61f823f6db6e233a78241815" ||
          "61e899b093c558580b82e93d":
          list.category = "video-games";
          break;
        case "61e8ada560ebc7812bbb5c03" || "61e899ae08186416d0e0ccd2":
          list.category = "movies";
          break;
        default:
          list.category = "unknown";
      }

      return axios
        .get(`${trelloBaseUrl}/lists/${list.id}/cards${trelloAuth}`, {
          ...trelloConfig,
        })
        .then((response) => {
          return response.data;
        });
    })
  );

  cards = cards.flat();

  await cards.forEach((card) => {
    cardCollections.updateOne(
      { id: card.id },
      { $set: card },
      { upsert: true },
      (err, doc) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });

  res.send({
    lists: lists,
    cards: cards,
  });
});

// Delete Post

const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.j62du6m.mongodb.net/?retryWrites=true&w=majority`;

async function loadMediaLists() {
  const client = await mongodb.MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
  });

  return client.db("andisReks").collection("mediaLists");
}

async function loadMediaCards() {
  const client = await mongodb.MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
  });

  return client.db("andisReks").collection("mediaCards");
}

module.exports = router;
